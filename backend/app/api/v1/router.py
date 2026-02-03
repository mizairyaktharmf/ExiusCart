from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, shops, products, orders, customers

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])
api_router.include_router(shops.router, prefix="/shops", tags=["Shops"])
api_router.include_router(products.router, prefix="/products", tags=["Products"])
api_router.include_router(orders.router, prefix="/orders", tags=["Orders"])
api_router.include_router(customers.router, prefix="/customers", tags=["Customers"])
