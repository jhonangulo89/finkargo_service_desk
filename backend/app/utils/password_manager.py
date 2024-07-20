from bcrypt import gensalt, hashpw, checkpw


def encript_password(password: str):
    pwd = password.encode('utf-8')
    salt = gensalt()
    encript = hashpw(pwd, salt)
    hashed_password_str = encript.decode('utf-8')
    return hashed_password_str

def check_password(password: str, password_db: str):
    if checkpw(bytes(password, 'utf-8'),  bytes(password_db, 'utf-8')):
        return True
    else:
        return False
