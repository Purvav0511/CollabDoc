SERVER_CMD=cmd/server/server.go
CLIENT_CMD=cmd/client/client.go

.PHONY: all build run-server run-client clean

all: build

build:
	@echo "Building server and client..."
	go build -o bin/server $(SERVER_CMD)
	go build -o bin/client $(CLIENT_CMD)

# Run the server
run-server:
	@echo "Running server..."
	go run $(SERVER_CMD)

# Run the client
run-client:
	@echo "Running client..."
	go run $(CLIENT_CMD)

# Clean the binaries
clean:
	@echo "Cleaning up..."
	rm -f bin/server bin/client