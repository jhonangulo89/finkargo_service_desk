from pydantic import BaseModel, EmailStr, UUID4
from app.utils.to_camel import to_camel

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    user_id: UUID4
    email: EmailStr
    first_name: str
    last_name: str

    class Config:
        from_attributes = True
        alias_generator = to_camel
        populate_by_name = True
