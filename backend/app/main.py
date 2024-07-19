from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from app.middlewares.error_handler import ErrorHandler
from databases import Database
from sqlalchemy import create_engine, MetaData

DATABASE_URL = "postgresql://postgres:postgres@db:5432/mydatabase"

database = Database(DATABASE_URL)
metadata = MetaData()

app = FastAPI()
app.title = "Api test"
app.version = "1.0.0"

app.add_middleware(ErrorHandler)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/", tags=["Home"])
async def message():
    return HTMLResponse('<h1>¡Bienvenido Jhon Manuel fff!</h1>')

@app.get("/error")
def trigger_error():
    raise HTTPException(status_code=404, detail="Not Found")
