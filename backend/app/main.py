from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.middlewares.error_handler import ErrorHandler
from app.routers.user import user_router
from app.routers.ticket import ticket_router
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
app.include_router(ticket_router)
app.include_router(project_router)

@app.get("/healthcheck", tags=["Health_Check"], response_class=JSONResponse)
async def health_check():
    return {"status": "ok"}

# test

# from fastapi import FastAPI
# import importlib
# import pkgutil
# from pathlib import Path
# from app.routers.v1 import __name__ as router_package

# app = FastAPI()

# # Prefijo de la versión
# version_prefix = "/v1"

# # Ruta a la carpeta de routers de la versión 1
# routers_path = Path(__file__).parent / "routers" / "v1"

# # Cargar todos los routers automáticamente
# for module_info in pkgutil.iter_modules([str(routers_path)]):
#     if not module_info.ispkg:
#         module_name = f"{router_package}.{module_info.name}"
#         module = importlib.import_module(module_name)
#         if hasattr(module, "router"):
#             app.include_router(module.router, prefix=version_prefix)

# @app.get("/")
# async def root():
#     return {"message": "Hello World"}
