# CollabDoc
CollabDoc is a simple distributed shared document editing, platform

# CollabDoc: Collaborative Document Editor

## Project Overview

CollabDoc is a collaborative document editor similar to Google Docs or CodeShare. It allows multiple users to edit documents in real-time with data consistency and conflict resolution.

## 7-Day Development Plan

### Day 1: Project Initialization and Basic Setup
- **Tasks:**
  - Set up a Git repository to track project changes.
  - Initialize a Go module and set up the basic folder structure as shown in your current file structure.
  - Create a simple `main.go` file to start the Go application.
  - Set up a basic WebSocket server in `cmd/server/server.go`.
  - Create a basic client application in `cmd/client/client.go`.
  - Write Dockerfiles for each service (server, client).
- **Goals:**
  - Have a running Go application with a basic WebSocket server and client structure.
  - Create Docker images for the server and client.
- **Details:**
  - Use `go mod init collabdoc` to initialize the module.
  - Implement a basic WebSocket server using the `github.com/gorilla/websocket` package.
  - Create a simple HTML client to test the WebSocket connection.
  - Write Dockerfiles to containerize the Go services.

### Day 2: Implement Client-Server Communication and Docker Compose
- **Tasks:**
  - Develop the WebSocket server to handle client connections, disconnections, and basic message broadcasting.
  - Implement the client-side WebSocket communication to send and receive messages.
  - Set up a Docker Compose file to manage multi-container Docker applications.
- **Goals:**
  - Establish a WebSocket connection between the server and multiple clients.
  - Enable basic message exchange between clients through the server.
  - Use Docker Compose to orchestrate the containers.
- **Details:**
  - Handle basic WebSocket events such as `onopen`, `onmessage`, `onclose` in both server and client code.
  - Test the communication using a simple HTML client.
  - Create a `docker-compose.yml` file to define and run multi-container Docker applications.

### Day 3: Persistence Service and Database Integration
- **Tasks:**
  - Set up a NoSQL database (e.g., MongoDB) and connect it to your Go application.
  - Implement basic CRUD operations for document data in `core/server/server.go`.
  - Develop the Persistence Service to handle data storage and retrieval.
  - Containerize the database service.
- **Goals:**
  - Save and retrieve document data from the NoSQL database.
  - Use Docker Compose to manage the database container.
- **Details:**
  - Use the `go.mongodb.org/mongo-driver/mongo` package for MongoDB integration.
  - Create data models and schemas for document storage.
  - Implement functions for creating, reading, updating, and deleting documents.
  - Add the database service to `docker-compose.yml`.

### Day 4: Document State Service and Conflict Resolution
- **Tasks:**
  - Implement the Document State Service to manage real-time document states.
  - Develop conflict resolution mechanisms to handle concurrent edits.
  - Containerize the Document State Service.
- **Goals:**
  - Ensure consistent document states across multiple clients.
  - Add the Document State Service to Docker Compose.
- **Details:**
  - Implement state synchronization and conflict resolution algorithms.
  - Use operational transformation (OT) or conflict-free replicated data types (CRDTs) for conflict resolution.
  - Update `docker-compose.yml` to include the Document State Service container.

### Day 5: Centralized Service and Node Management
- **Tasks:**
  - Develop the Centralized Service for node management and user authentication.
  - Implement user authentication and authorization mechanisms.
  - Containerize the Centralized Service.
- **Goals:**
  - Manage client nodes and authenticate users.
  - Add the Centralized Service to Docker Compose.
- **Details:**
  - Use JWT or OAuth for authentication.
  - Implement user registration, login, and session management.
  - Update `docker-compose.yml` to include the Centralized Service container.

### Day 6: Kubernetes Setup and Deployment
- **Tasks:**
  - Set up a Kubernetes cluster (using Minikube, Kind, or a cloud provider like GKE, EKS, or AKS).
  - Write Kubernetes deployment and service manifests for each containerized service.
  - Deploy the application to the Kubernetes cluster.
- **Goals:**
  - Containerize and deploy all services to Kubernetes.
- **Details:**
  - Create deployment YAML files for each service.
  - Create service YAML files to expose the deployments.
  - Deploy the services to the Kubernetes cluster and ensure they are running properly.

### Day 7: Testing, Scaling, and Documentation
- **Tasks:**
  - Conduct thorough testing of all services (WebSocket server, Persistence Service, Document State Service, Centralized Service).
  - Test the deployment on the Kubernetes cluster.
  - Implement auto-scaling and monitoring for the Kubernetes cluster.
  - Write comprehensive documentation and create a user guide.
- **Goals:**
  - Ensure reliable and fault-tolerant operations with Kubernetes.
  - Document the setup, usage, and maintenance procedures in the README.md file.
- **Details:**
  - Set up Horizontal Pod Autoscaler (HPA) for scaling the application.
  - Use Prometheus and Grafana for monitoring the Kubernetes cluster.
  - Document the deployment process and usage instructions.

## Development

### Prerequisites

- Go (https://golang.org/doc/install)
- Docker (https://docs.docker.com/get-docker/)
- Docker Compose (https://docs.docker.com/compose/install/)
- Kubernetes (https://kubernetes.io/docs/setup/)
- kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl/)

### Build and Run

To build the Go applications, run:

```sh
make build
