
# Python Project

This is a Python project that uses Uvicorn to run an ASGI application.

## Requirements

- Python 3.12
- Poetry
- Uvicorn

## Installation

1. Clone the repository:
	```sh
	git clone <REPOSITORY_URL>
	cd <REPOSITORY_NAME>
	```

2. Install Poetry if you haven't already:
	```sh
	pip install poetry
	```

3. Install the dependencies:
	```sh
	poetry install
	```

4. Install the dependencies:
```sh
poetry install
```

## Running the Application

To run the application, use the following command:

```sh
poetry run uvicorn app.main:app --reload
```

export PYTHONPATH=$(pwd)/app
