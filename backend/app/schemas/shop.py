from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class ShopBase(BaseModel):
    name: str
    description: Optional[str] = None
    phone: Optional[str] = None
    whatsapp: Optional[str] = None
    email: Optional[EmailStr] = None
    address: Optional[str] = None
    city: Optional[str] = None
    country: str = "UAE"
    currency: str = "AED"
    tax_number: Optional[str] = None


class ShopCreate(ShopBase):
    pass


class ShopUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    phone: Optional[str] = None
    whatsapp: Optional[str] = None
    email: Optional[EmailStr] = None
    address: Optional[str] = None
    city: Optional[str] = None
    tax_number: Optional[str] = None
    logo_url: Optional[str] = None


class ShopResponse(ShopBase):
    id: int
    slug: str
    logo_url: Optional[str] = None
    is_active: bool
    owner_id: int
    created_at: datetime

    class Config:
        from_attributes = True
