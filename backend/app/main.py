from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from app.middlewares.error_handler import ErrorHandler
from app.routers.user import user_router
# from schemas.models import HealthResponse

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.title = "Api FK_Service_Desk"
app.version = "1.0.0"

app.add_middleware(ErrorHandler)
app.include_router(user_router)

# @app.get("/", response_model=HealthResponse)
# async def health():
#     return HealthResponse(status="Ok")

