from fastapi import APIRouter, Depends, Path, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, UUID4
from typing import Optional, List
from fastapi.encoders import jsonable_encoder
from app.middlewares.jwt_bearer import JWTBearer
from app.config.database import Session
from app.services.issue import IssueService
from app.schemas.issue import IssueOut, IssueCreate, IssueUpdate

issue_router = APIRouter()

# @issue_router.get("/issues", tags=["Issues"], response_model=List[IssueOut], status_code=200, dependencies=[Depends(JWTBearer())])
@issue_router.get("/issues", tags=["Issues"], response_model=List[IssueOut], status_code=200)
def get_issues() -> List[IssueOut]:
    db = Session()
    result = IssueService(db).get_issues()
    return JSONResponse(content=jsonable_encoder(result), status_code=200)

@issue_router.get("/issues/{id}", tags=["Issues"], response_model=IssueOut, status_code=200)
def get_issue(id: UUID4) -> IssueOut:
    db = Session()
    result = IssueService(db).get_issue(id)
    if not result:
        return JSONResponse(content={'message': 'without results'}, status_code=404)
    return JSONResponse(content=jsonable_encoder(result), status_code=200)


@issue_router.post("/issues", tags=["Issues"], response_model=dict, status_code=201)
def create_issue(issue: IssueCreate) -> dict:
    db = Session()
    IssueService(db).create_issue(issue)
    return JSONResponse(content={"message": "Issue created successfully"}, status_code=201)


@issue_router.put("/issues/{id}", tags=["Issues"], response_model=dict, status_code=200)
def update_issue(id: UUID4, issue: IssueUpdate) -> dict:
    print('test', id, issue)
    db = Session()
    result = IssueService(db).update_issue(id, issue)
    if not result:
        return JSONResponse(content={"message": "Issue not found"}, status_code=404)
    return JSONResponse(content={"message": "Issue updated successfully"}, status_code=200)


@issue_router.delete("/issues/{id}", tags=["Issues"], response_model=dict, status_code=200)
def delete_issue(id: UUID4) -> dict:
    db = Session()
    result = IssueService(db).delete_issue(id)
    if not result:
        return JSONResponse(content={"message": "Issue not found"}, status_code=404)
    return JSONResponse(content={"message": "Issue deleted successfully"}, status_code=200)
