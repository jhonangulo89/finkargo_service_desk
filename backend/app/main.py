from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.middlewares.error_handler import ErrorHandler
from app.routers.user import user_router
from app.routers.issue import issue_router
from app.routers.project import project_router

# Configurar CORS
origins = [
    "http://localhost",
    "http://localhost:4000",
    "http://example.com",  # Añade tus dominios permitidos aquí
]


app = FastAPI()
app.title = "Api FK_Service_Desk"
app.version = "1.0.0"

app.add_middleware(ErrorHandler)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router)
app.include_router(issue_router)
app.include_router(project_router)

@app.get("/health", tags=["Health_Check"], response_class=JSONResponse)
async def health_check():
    return {"status": "ok"}

