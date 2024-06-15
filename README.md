# CollabDoc: Collaborative Document Editor

## Project Overview

CollabDoc is a collaborative document editor similar to Google Docs or CodeShare. It allows multiple users to edit documents in real-time with data consistency and conflict resolution.

## Architecture

![Architecture Diagram](misc/arch-diagram.png)

## 7-Day Development Plan

### Day 1: Project Initialization and Basic WebSocket Server Setup

**Tasks:**
- Set up a Git repository to track project changes.
- Initialize a Go module and set up the basic folder structure.
- Create a basic WebSocket server in `cmd/server/server.go`.
- Create a simple web client in `static/index.html`.
- Write Dockerfile for the WebSocket server.
- Test the WebSocket server and web client.

**Goals:**
- Have a running Go WebSocket server and web client.
- Containerize the WebSocket server.

**Details:**
- Use `go mod init collabdoc` to initialize the module.
- Implement a basic WebSocket server using the `github.com/gorilla/websocket` package.
- Create a simple HTML client to test the WebSocket connection.
- Write a Dockerfile to containerize the WebSocket server.

### Day 2: Implement Document State Service

**Tasks:**
- Create the Document State Service with Conflict Resolution and State Synchronizer in `core/state/state.go`.
- Write Dockerfile for the Document State Service.
- Implement basic conflict resolution and state synchronization logic.

**Goals:**
- Have a working Document State Service.
- Containerize the Document State Service.

**Details:**
- Use Operational Transformation (OT) or Conflict-Free Replicated Data Types (CRDTs) for conflict resolution.
- Ensure the state synchronizer correctly updates the document state across clients.

### Day 3: Implement Persistence Service

**Tasks:**
- Create the Persistence Service with Recovery Service in `core/persistence/persistence.go`.
- Set up MongoDB and connect it to the Persistence Service.
- Write Dockerfile for the Persistence Service.

**Goals:**
- Have a working Persistence Service with MongoDB integration.
- Containerize the Persistence Service.

**Details:**
- Use `go.mongodb.org/mongo-driver/mongo` package for MongoDB integration.
- Implement CRUD operations for document data.

### Day 4: Implement Centralized Service

**Tasks:**
- Create the Centralized Service for Node Management and User Authentication in `core/centralized/centralized.go`.
- Implement user authentication using JWT or OAuth.
- Write Dockerfile for the Centralized Service.

**Goals:**
- Have a working Centralized Service with user authentication.
- Containerize the Centralized Service.

**Details:**
- Implement user registration, login, and session management.
- Manage nodes and distribute client connections among them.

### Day 5: Implement Replication Service

**Tasks:**
- Create the Replication Service in `core/replication/replication.go`.
- Write Dockerfile for the Replication Service.
- Implement replication logic to keep document replicas in sync.

**Goals:**
- Have a working Replication Service.
- Containerize the Replication Service.

**Details:**
- Ensure that document replicas are consistently synchronized across different instances.

### Day 6: Containerization and Kubernetes Setup

**Tasks:**
- Write Kubernetes deployment and service manifests for each microservice.
- Set up a Kubernetes cluster using Minikube or a cloud provider.
- Deploy all microservices to the Kubernetes cluster.

**Goals:**
- Have all microservices containerized and deployed on Kubernetes.

**Details:**
- Create deployment YAML files for each service.
- Create service YAML files to expose the deployments.
- Ensure all services are running correctly on the Kubernetes cluster.

### Day 7: Testing, Scaling, and Documentation

**Tasks:**
- Conduct thorough testing of all microservices.
- Implement auto-scaling and monitoring for the Kubernetes cluster using Prometheus and Grafana.
- Write comprehensive documentation and create a user guide.

**Goals:**
- Ensure reliable and fault-tolerant operations with Kubernetes.
- Document the setup, usage, and maintenance procedures.

**Details:**
- Set up Horizontal Pod Autoscaler (HPA) for scaling the application.
- Use Prometheus and Grafana for monitoring the Kubernetes cluster.
- Document the deployment process and usage instructions.

## Example Dockerfile for WebSocket Server

```dockerfile
# Use the official Golang image as the base image
FROM golang:1.16-alpine

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o server cmd/server/server.go

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the executable
CMD ["./server"]
