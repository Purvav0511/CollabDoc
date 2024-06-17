import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders WebSocket Chat title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WebSocket Chat/i);
    expect(titleElement).toBeInTheDocument();
});

test('sends and receives messages', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Type a message');
    const sendButton = screen.getByText('Send');

    // Mock WebSocket
    global.WebSocket = class {
        constructor(url) {
            this.url = url;
            this.readyState = 1; // OPEN
            this.send = jest.fn();
            this.close = jest.fn();
            this.onopen = jest.fn();
            this.onmessage = jest.fn();
        }
    };

    await act(async () => {
        fireEvent.change(input, { target: { value: 'Hello, world!' } });
        fireEvent.click(sendButton);
    });

    expect(global.WebSocket.prototype.send).toHaveBeenCalledTimes(1);
    expect(global.WebSocket.prototype.send).toHaveBeenCalledWith(
        JSON.stringify({ username: 'User', message: 'Hello, world!' })
    );
});
