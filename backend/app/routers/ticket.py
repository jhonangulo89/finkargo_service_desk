from fastapi import APIRouter, Depends, Path, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, UUID4
from typing import Optional, List
from fastapi.encoders import jsonable_encoder
from app.middlewares.jwt_bearer import JWTBearer
from app.config.database import Session
from app.services.ticket import TicketService
from app.schemas.ticket import TicketOut, TicketCreate, TicketUpdate

ticket_router = APIRouter()

# @ticket_router.get("/tickets", tags=["Tickets"], response_model=List[TicketOut], status_code=200, dependencies=[Depends(JWTBearer())])
@ticket_router.get("/tickets", tags=["Tickets"], response_model=List[TicketOut], status_code=200)
def get_tickets() -> List[TicketOut]:
    db = Session()
    result = TicketService(db).get_tickets()
    return JSONResponse(content=jsonable_encoder(result), status_code=200)

@ticket_router.get("/tickets/{id}", tags=["Tickets"], response_model=TicketOut, status_code=200)
def get_ticket(id: UUID4) -> TicketOut:
    db = Session()
    result = TicketService(db).get_ticket(id)
    if not result:
        return JSONResponse(content={'message': 'without results'}, status_code=404)
    return JSONResponse(content=jsonable_encoder(result), status_code=200)


@ticket_router.post("/tickets", tags=["Tickets"], response_model=dict, status_code=201)
def create_ticket(ticket: TicketCreate) -> dict:
    db = Session()
    TicketService(db).create_ticket(ticket)
    return JSONResponse(content={"message": "Ticket created successfully"}, status_code=201)


@ticket_router.put("/tickets/{id}", tags=["Tickets"], response_model=dict, status_code=200)
def update_ticket(id: UUID4, ticket: TicketUpdate) -> dict:
    db = Session()
    result = TicketService(db).update_ticket(id, ticket)
    if not result:
        return JSONResponse(content={"message": "Ticket not found"}, status_code=404)
    return JSONResponse(content={"message": "Ticket updated successfully"}, status_code=200)


@ticket_router.delete("/tickets/{id}", tags=["Tickets"], response_model=dict, status_code=200)
def delete_ticket(id: UUID4) -> dict:
    db = Session()
    result = TicketService(db).delete_ticket(id)
    if not result:
        return JSONResponse(content={"message": "Ticket not found"}, status_code=404)
    return JSONResponse(content={"message": "Ticket deleted successfully"}, status_code=200)
