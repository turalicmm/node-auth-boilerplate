# Node Express Authentication with JWT and Jest Tests

This project showcases a simple authentication system built using Node.js and Express framework, along with JWT (JSON Web Tokens) for secure authentication. The project also includes comprehensive unit and integration tests using Jest, ensuring robustness and reliability.

## Technologies Used

- **Node.js**: Powering the backend server logic.
- **Express**: For creating RESTful APIs and handling authentication routes.
- **JWT (JSON Web Tokens)**: Providing secure and stateless authentication.
- **Jest**: Framework for writing and running tests to ensure code quality and reliability.
- **Docker**: Containerization for easy deployment and scalability.
- **Kubernetes**: Orchestrating and managing containerized applications in a scalable manner.

## Features

- User registration and login endpoints with JWT authentication.
- Secure password hashing.
- Unit and integration tests covering authentication endpoints.
- Dockerized environment for easy setup and deployment.
- Scalable deployment using Kubernetes for production environments.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables for configuration (e.g., database connection, kubernetes deployment setup, JWT secret).
4. Start the development server: `npm start`
5. Run tests: `npm test`

## Kubernetes Deployment

To deploy the application using Kubernetes, follow these steps:

1. Add your Docker image name to the Kubernetes Deployment file (infra/k8s/auth-depl.yaml):
2. Configure the Ingress for routing traffic to your service (infra/k8s/ingress-srv.yaml):
   
