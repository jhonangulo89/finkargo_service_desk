from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from app.utils.jwt_manager import create_token
from app.schemas.user import UserLogin
from app.config.database import Session
from app.services.user import UserService
from app.utils.password_manager import check_password

user_router = APIRouter()

@user_router.post("/auth/login", tags=["Auth"], response_model=dict, status_code=200)
def login(user: UserLogin) -> dict:
    db = Session()
    result = UserService(db).get_user(user.email)
    if user.email == result.email and check_password(user.password, result.password):
        loginUser = { 'sub':  str(result.user_id) }
        token, refresh_token = create_token(loginUser)
        return JSONResponse(content={"token": token, "refreshToken": refresh_token}, status_code=200)
    return JSONResponse(content={"message": "Credenciales incorrectas"}, status_code=401)
