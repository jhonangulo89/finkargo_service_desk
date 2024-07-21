from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# from app.models.user import User
# from app.models.ticket import Ticket
# from app.models.project import User

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/agile_ticket_tracker"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# issues_with_users = Session.query(Ticket).join(User).all()

# for issue in issues_with_users:
#     print(f"Issue: {issue.description}, User: {issue.user.name}")

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

