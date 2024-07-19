from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from app.middlewares.error_handler import ErrorHandler

app = FastAPI()
app.title = "Api test"
app.version = "1.0.0"

app.add_middleware(ErrorHandler)

@app.get("/", tags=["Home"])
async def message():
    return HTMLResponse('<h1>¡Bienvenido Jhon Manuel fff!</h1>')

@app.get("/error")
def trigger_error():
    raise HTTPException(status_code=404, detail="Not Found")
