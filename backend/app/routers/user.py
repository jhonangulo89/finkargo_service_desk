from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from app.utils.jwt_manager import create_token
from app.schemas.user import UserLogin
from app.config.database import Session
from app.services.user import UserService

user_router = APIRouter()

@user_router.post("/login", tags=["Login"], response_model=dict, status_code=200)
def login(user: UserLogin) -> dict:
    print('intro validate user')
    db = Session()
    result = UserService(db).get_user('jhonangulo@finkargo.com')
    print(result)
    if user.email == "admin@gmail.com" and user.password == "admin":
        token = create_token(user.dict())
        return JSONResponse(content={"token": token}, status_code=200)
    return JSONResponse(content={"message": "Credenciales incorrectas"}, status_code=401)
