from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID
from app.utils.to_camel import to_camel

class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Nombre del proyecto",
                    "description": "Descripción del proyecto..."
                }
            ]
        }
    }

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(ProjectBase):
    pass

class ProjectOut(ProjectBase):
    project_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
        alias_generator = to_camel
        populate_by_name = True

