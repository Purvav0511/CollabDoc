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
- **Goals:**
  - Have a running Go application with a basic WebSocket server and client structure.
- **Details:**
  - Use `go mod init collabdoc` to initialize the module.
  - Implement a basic WebSocket server using the `github.com/gorilla/websocket` package.
  - Create a simple HTML client to test the WebSocket connection.

### Day 2: Implement Client-Server Communication
- **Tasks:**
  - Develop the WebSocket server to handle client connections, disconnections, and basic message broadcasting.
  - Implement the client-side WebSocket communication to send and receive messages.
- **Goals:**
  - Establish a WebSocket connection between the server and multiple clients.
  - Enable basic message exchange between clients through the server.
- **Details:**
  - Handle basic WebSocket events such as `onopen`, `onmessage`, `onclose` in both server and client code.
  - Test the communication using a simple HTML client.

### Day 3: Persistence Service and Database Integration
- **Tasks:**
  - Set up a NoSQL database (e.g., MongoDB) and connect it to your Go application.
  - Implement basic CRUD operations for document data in `core/server/server.go`.
  - Develop the Persistence Service to handle data storage and retrieval.
- **Goals:**
  - Save and retrieve document data from the NoSQL database.
- **Details:**
  - Use the `go.mongodb.org/mongo-driver/mongo` package for MongoDB integration.
  - Create data models and schemas for document storage.
  - Implement functions for creating, reading, updating, and deleting documents.

### Day 4: Document State Service and Conflict Resolution
- **Tasks:**
  - Implement the Document State Service to manage real-time document states.
  - Develop conflict resolution mechanisms to handle concurrent edits.
- **Goals:**
  - Ensure consistent document states across multiple clients.
- **Details:**
  - Implement state synchronization and conflict resolution algorithms.
  - Use operational transformation (OT) or conflict-free replicated data types (CRDTs) for conflict resolution.

### Day 5: Centralized Service and Node Management
- **Tasks:**
  - Develop the Centralized Service for node management and user authentication.
  - Implement user authentication and authorization mechanisms.
- **Goals:**
  - Manage client nodes and authenticate users.
- **Details:**
  - Use JWT or OAuth for authentication.
  - Implement user registration, login, and session management.

### Day 6: Custom Container Implementation in Go
- **Tasks:**
  - Create a basic container runtime in Go.
  - Implement features to start, stop, and manage containers.
  - Build isolated environments for running services.
- **Goals:**
  - Implement a minimal container runtime to isolate and run services.
- **Details:**
  - Use Go to create isolated namespaces and control groups (cgroups).
  - Implement basic functionality to run a process in an isolated environment.
  - Research and utilize libraries like `github.com/opencontainers/runc` for reference.

### Day 7: Kubernetes Setup and Deployment
- **Tasks:**
  - Set up a Kubernetes cluster (using Minikube, Kind, or a cloud provider like GKE, EKS, or AKS).
  - Write Kubernetes deployment and service manifests for each containerized service.
  - Deploy the application to the Kubernetes cluster.
  - Write comprehensive documentation and create a user guide.
- **Goals:**
  - Deploy and manage custom containers with Kubernetes.
  - Ensure reliable and fault-tolerant operations.
- **Details:**
  - Create deployment YAML files for each service.
  - Create service YAML files to expose the deployments.
  - Deploy the services to the Kubernetes cluster and ensure they are running properly.
  - Document the setup, usage, and maintenance procedures in the README.md file.

## Development

### Prerequisites

- Go (https://golang.org/doc/install)
- MongoDB (https://docs.mongodb.com/manual/installation/)
- Podman (https://podman.io/getting-started/installation)
- Kubernetes (https://kubernetes.io/docs/setup/)
- kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl/)

### Build and Run

To build the Go applications, run:

```sh
make build
