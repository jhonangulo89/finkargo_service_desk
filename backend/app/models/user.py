from sqlalchemy import Column, String, DateTime, Boolean, func
from sqlalchemy.dialects.postgresql import UUID
from app.config.database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, server_default=func.gen_random_uuid())
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    phone_number = Column(String(15))
    is_active = Column(Boolean, server_default='true')
    created_at = Column(DateTime, server_default=func.current_timestamp())
    updated_at = Column(DateTime,server_default=func.current_timestamp())
    last_login = Column(DateTime)
    profile_picture = Column(String(255))

