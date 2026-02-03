from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
import uuid
from app.core.database import get_db
from app.models.user import User
from app.models.shop import Shop
from app.models.order import Order, OrderItem
from app.models.product import Product
from app.schemas.order import OrderCreate, OrderResponse, OrderUpdate
from app.api.v1.deps import get_current_user

router = APIRouter()


def generate_order_number() -> str:
    timestamp = datetime.now().strftime("%Y%m%d%H%M")
    unique = uuid.uuid4().hex[:4].upper()
    return f"ORD-{timestamp}-{unique}"


@router.post("/", response_model=OrderResponse, status_code=status.HTTP_201_CREATED)
async def create_order(
    shop_id: int,
    order_data: OrderCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    shop = db.query(Shop).filter(Shop.id == shop_id, Shop.owner_id == current_user.id).first()
    if not shop:
        raise HTTPException(status_code=404, detail="Shop not found")

    # Calculate totals
    subtotal = 0
    order_items = []

    for item in order_data.items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail=f"Product {item.product_id} not found")

        item_total = item.quantity * item.unit_price
        subtotal += item_total

        order_items.append({
            "product_id": item.product_id,
            "quantity": item.quantity,
            "unit_price": item.unit_price,
            "total_price": item_total
        })

        # Update inventory
        product.quantity -= item.quantity

    # Calculate tax (5% VAT for UAE)
    tax_amount = subtotal * 0.05
    total = subtotal + tax_amount

    # Create order
    new_order = Order(
        order_number=generate_order_number(),
        shop_id=shop_id,
        customer_id=order_data.customer_id,
        source=order_data.source,
        subtotal=subtotal,
        tax_amount=tax_amount,
        total=total,
        notes=order_data.notes,
        shipping_address=order_data.shipping_address
    )
    db.add(new_order)
    db.flush()

    # Create order items
    for item_data in order_items:
        order_item = OrderItem(order_id=new_order.id, **item_data)
        db.add(order_item)

    db.commit()
    db.refresh(new_order)
    return new_order


@router.get("/", response_model=List[OrderResponse])
async def get_orders(
    shop_id: int,
    status: Optional[str] = None,
    source: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Order).filter(Order.shop_id == shop_id)

    if status:
        query = query.filter(Order.status == status)
    if source:
        query = query.filter(Order.source == source)

    orders = query.order_by(Order.created_at.desc()).offset(skip).limit(limit).all()
    return orders


@router.get("/{order_id}", response_model=OrderResponse)
async def get_order(
    order_id: int,
    shop_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(
        Order.id == order_id,
        Order.shop_id == shop_id
    ).first()

    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order


@router.put("/{order_id}", response_model=OrderResponse)
async def update_order(
    order_id: int,
    shop_id: int,
    order_data: OrderUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(
        Order.id == order_id,
        Order.shop_id == shop_id
    ).first()

    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    update_data = order_data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(order, field, value)

    db.commit()
    db.refresh(order)
    return order
