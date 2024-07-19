from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.exceptions import HTTPException

class ErrorHandler(BaseHTTPMiddleware):
    def __init__(self, app: FastAPI) -> None:
        super().__init__(app)

    async def dispatch(self, request: Request, call_next) -> Response | JSONResponse:
        try:
            response = await call_next(request)
            if response.status_code == 404:
                return JSONResponse(
                    status_code=404,
                    content={"message": "Not Found"}
                )
            return response
        except HTTPException as http_exc:
            return JSONResponse(
                status_code=http_exc.status_code,
                content={"message": http_exc.detail},
            )
        except Exception as e:
            return JSONResponse(status_code=500, content={'message': str(e)})
