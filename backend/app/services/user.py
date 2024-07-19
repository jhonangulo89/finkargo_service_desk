from app.models.user import User as UserModel
from app.schemas.user import UserLogin

class UserService():
    def __init__(self, db) -> None:
        self.db = db

    def get_user(self, email: str):
        result = self.db.query(UserLogin).filter(UserModel.email == email).first()
        print('db',result)
        return result
