from app.models.ticket import Ticket as TicketModel
from app.schemas.ticket import TicketUpdate, TicketCreate
from uuid import UUID
from app.schemas.ticket import TicketOut

class TicketService():
    def __init__(self, db) -> None:
        self.db = db

    def get_tickets(self):
        result = self.db.query(TicketModel).limit(10).all()
        tickets_data = [TicketOut.model_validate(ticket) for ticket in result]
        # Imprimir datos serializados
        # print([ticket.dict() for ticket in tickets_data])
        return tickets_data

    def get_ticket(self, id: UUID):
        result = self.db.query(TicketModel).filter(TicketModel.issue_id == id).first()
        return result

    def create_ticket(self, ticket: TicketCreate):
        new_ticket =TicketModel(**ticket.dict())
        self.db.add(new_ticket)
        self.db.commit()
        return

    def update_ticket(self, id: int, ticket: TicketUpdate):
        result = self.db.query(TicketModel).filter(TicketModel.issue_id == id).first()
        if not result:
            return None
        result.title = ticket.title
        result.description = ticket.description
        result.priority = ticket.priority
        result.status = ticket.status
        result.type = ticket.type
        self.db.commit()
        return result

    def delete_ticket(self, id: UUID):
        result = self.db.query(TicketModel).filter(TicketModel.issue_id == id).first()
        if not result:
            return None
        self.db.delete(result)
        self.db.commit()
        return result
