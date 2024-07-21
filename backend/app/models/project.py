from sqlalchemy import Column, String, Text, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from app.config.database import Base
from sqlalchemy.orm import relationship

class Project(Base):
	__tablename__ = 'projects'

	project_id = Column(UUID(as_uuid=True), primary_key=True, server_default=func.gen_random_uuid())
	name = Column(String(100), nullable=False)
	description = Column(Text)
	created_at = Column(DateTime, server_default=func.current_timestamp())
	updated_at = Column(DateTime, server_default=func.current_timestamp())

	# Relación uno a muchos con Ticket
	tickets = relationship("Ticket", back_populates="project")
