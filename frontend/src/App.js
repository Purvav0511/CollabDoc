import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080/ws');

        ws.current.onopen = () => console.log('Connected to WebSocket server');

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        ws.current.onerror = (error) => {
            console.log('WebSocket error: ', error);
        };

        ws.current.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        return () => {
            ws.current.close();
        };
    }, []);

    const sendMessage = () => {
        const message = { username: 'User', message: input };
        ws.current.send(JSON.stringify(message));
        setInput('');
    };

    return (
        <div>
            <h1>WebSocket Chat</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg.username}: {msg.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
