from .user import User
from .project import Project
from .ticket import Ticket
from app.config.database import Base, engine

# Importar y registrar todos los modelos
# Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
