from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime
from app.schemas.user import UserOut
from app.schemas.project import ProjectOut
from app.utils.to_camel import to_camel

class TicketBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: str
    type: str
    priority: str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "title": "Título de del ticket",
                    "description": "Descripción del ticket...",
                    "status": "activo",
                    "type": "bug",
                    "priority": "alta",
                    "user_id": "envia el id del usuario",
                    "project_id": "envia el id del proyecto"
                }
            ]
        }
    }

class TicketCreate(TicketBase):
    pass

class TicketUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    type: Optional[str] = None
    priority: Optional[str] = None

class TicketOut(TicketBase):
    issue_id: UUID
    created_at: datetime
    updated_at: datetime
    user: Optional[UserOut] = None
    project: Optional[ProjectOut] = None

    class Config:
        from_attributes = True
        alias_generator = to_camel
        populate_by_name = True
