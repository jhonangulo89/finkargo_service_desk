# ATT - Agile Ticket Tracker

tool for managing bugs and support cases focused on software development.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation Instructions

Follow these steps to set up the project using `docker-compose`:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Build docker image:

    ```bash
    docker-compose build
    ```

3. Pull up docker image:

    ```bash
    docker-compose up -d
    ```

4. Access the application in your web browser by navigating to `http://localhost:4000`.


- Stop the application by running the following command:
   ```bash
   docker-compose down
   ```

- To rebuild the containers:
    ```bash
    docker-compose up --build
    ```
