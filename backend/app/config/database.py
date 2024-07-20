from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# from app.models.projects import Project

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/mydatabase"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
# Base.metadata.create_all(engine)

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

