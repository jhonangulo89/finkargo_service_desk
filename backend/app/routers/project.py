from fastapi import APIRouter, Depends, Path, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, UUID4
from typing import Optional, List
from fastapi.encoders import jsonable_encoder
from app.middlewares.jwt_bearer import JWTBearer
from app.config.database import Session
from app.services.project import ProjectService
from app.schemas.project import ProjectOut, ProjectCreate, ProjectUpdate

project_router = APIRouter()

@project_router.get("/projects", tags=["Projects"], response_model=List[ProjectOut], status_code=200)
def get_projects() -> List[ProjectOut]:
    db = Session()
    result = ProjectService(db).get_projects()
    return JSONResponse(content=jsonable_encoder(result), status_code=200)

@project_router.get("/projects/{project_id}", tags=["Projects"], response_model=ProjectOut, status_code=200)
def get_project(project_id: UUID4) -> ProjectOut:
    db = Session()
    result = ProjectService(db).get_project(project_id)
    if not result:
        return JSONResponse(content={'message': 'without results'}, status_code=404)
    return JSONResponse(content=jsonable_encoder(result), status_code=200)

@project_router.post("/projects", tags=["Projects"], response_model=dict, status_code=201)
def create_project(project: ProjectCreate) -> dict:
    db = Session()
    ProjectService(db).create_project(project)
    return JSONResponse(content={"message": "Project created successfully"}, status_code=201)

@project_router.put("/projects/{project_id}", tags=["Projects"], response_model=dict, status_code=200)
def update_project(project_id: UUID4, project: ProjectUpdate) -> dict:
    db = Session()
    result = ProjectService(db).update_project(project_id, project)
    if not result:
        return JSONResponse(content={"message": "Project not found"}, status_code=404)
    return JSONResponse(content={"message": "Project updated successfully"}, status_code=200)

@project_router.delete("/projects/{project_id}", tags=["Projects"], response_model=dict, status_code=200)
def delete_project(project_id: UUID4) -> dict:
    db = Session()
    result = ProjectService(db).delete_project(project_id)
    if not result:
        return JSONResponse(content={"message": "Project not found"}, status_code=404)
    return JSONResponse(content={"message": "Project deleted successfully"}, status_code=200)
