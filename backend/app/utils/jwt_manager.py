from jwt import encode, decode
from datetime import datetime, timedelta, timezone

def create_token(data: dict):
    expiration_time = datetime.now(timezone.utc) + timedelta(minutes=15)
    expiration_time_refresh = datetime.now(timezone.utc) + timedelta(minutes=60)
    data['iss'] = "https://finkargo.com"
    data['iat'] = datetime.now(timezone.utc)
    data['exp'] = expiration_time
    token = encode(payload=data, key='secret', algorithm='HS256')
    data['exp'] = expiration_time_refresh
    refresh_token = encode(payload=data, key='secret', algorithm='HS256')
    return token, refresh_token

def validate_token(token: str):
    data = decode(token, key='secret', algorithms=['HS256'])
    return data
