from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime

class IssueBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: str
    type: str
    priority: str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "title": "Título de del issue",
                    "description": "Descripción del issue...",
                    "status": "activo",
                    "type": "bug",
                    "priority": "alta",
                    "user_id": "envia el id del usuario",
                    "project_id": "envia el id del proyecto"
                }
            ]
        }
    }

class IssueCreate(IssueBase):
    pass

class IssueUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    type: Optional[str] = None
    priority: Optional[str] = None

class IssueOut(IssueBase):
    issue_id: UUID
    created_at: datetime
    updated_at: datetime
    user_id: Optional[UUID] = None
    project_id: Optional[UUID] = None

    class Config:
        from_attributes = True
