from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base
import enum


class PlanType(str, enum.Enum):
    STARTER = "starter"
    BUSINESS = "business"
    PRO = "pro"


class BillingType(str, enum.Enum):
    ONE_TIME = "one_time"
    MONTHLY = "monthly"


class SubscriptionStatus(str, enum.Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    CANCELLED = "cancelled"
    TRIAL = "trial"


class Plan(Base):
    __tablename__ = "plans"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)  # starter, business, pro
    max_products = Column(Integer, nullable=False)
    max_users = Column(Integer, nullable=False)
    features = Column(String(1000), nullable=True)  # JSON string of features
    is_active = Column(Boolean, default=True)


class Subscription(Base):
    __tablename__ = "subscriptions"

    id = Column(Integer, primary_key=True, index=True)
    plan_type = Column(String(20), nullable=False)
    billing_type = Column(String(20), nullable=False)  # one_time or monthly
    status = Column(String(20), default=SubscriptionStatus.TRIAL.value)
    amount_paid = Column(Numeric(10, 2), nullable=True)
    currency = Column(String(10), default="AED")
    promo_code = Column(String(50), nullable=True)
    discount_percent = Column(Integer, default=0)
    trial_ends_at = Column(DateTime(timezone=True), nullable=True)
    starts_at = Column(DateTime(timezone=True), server_default=func.now())
    expires_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Foreign Keys
    shop_id = Column(Integer, ForeignKey("shops.id"), nullable=False)
    plan_id = Column(Integer, ForeignKey("plans.id"), nullable=True)

    # Relationships
    shop = relationship("Shop", back_populates="subscription")
