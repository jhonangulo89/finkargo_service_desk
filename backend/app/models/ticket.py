from sqlalchemy import Column, String, DateTime, Text, func
from sqlalchemy.dialects.postgresql import UUID
from app.config.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Ticket(Base):
    __tablename__ = "tickets"

    issue_id = Column(UUID(as_uuid=True), primary_key=True, server_default=func.gen_random_uuid())
    title = Column(String(255), nullable=False)
    description = Column(Text)
    status = Column(String(50), nullable=False)
    type = Column(String(50), nullable=False)
    priority = Column(String(50), nullable=False)
    created_at = Column(DateTime, server_default=func.current_timestamp())
    updated_at = Column(DateTime, server_default=func.current_timestamp())
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.user_id'))
    project_id = Column(UUID(as_uuid=True), ForeignKey('projects.project_id'))

    # Relaciones
    user = relationship("User", back_populates="tickets")
    project = relationship("Project", back_populates="tickets")

