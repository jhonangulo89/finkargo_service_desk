from app.models.user import User as UserModel

class UserService():
    def __init__(self, db) -> None:
        self.db = db

    def get_user(self, email: str):
        result = self.db.query(UserModel).filter(UserModel.email == email).first()
        return result
