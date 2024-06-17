package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/websocket"
	"github.com/stretchr/testify/assert"
)

func TestHandleConnections(t *testing.T) {
	// Create a test server with the WebSocket handler
	t.Log("TestHandleConnections started")
	server := httptest.NewServer(http.HandlerFunc(handleConnections))
	defer server.Close()

	// Create a WebSocket connection to the test server
	u := "ws" + server.URL[4:] + "/ws"
	ws, _, err := websocket.DefaultDialer.Dial(u, nil)
	assert.NoError(t, err)
	defer ws.Close()

	// Send a message to the WebSocket server
	msg := Message{Username: "test", Message: "hello"}
	err = ws.WriteJSON(msg)
	assert.NoError(t, err)

	// Read the message back from the WebSocket server
	var received Message
	err = ws.ReadJSON(&received)
	assert.NoError(t, err)
	assert.Equal(t, msg.Username, received.Username)
	assert.Equal(t, msg.Message, received.Message)
}
