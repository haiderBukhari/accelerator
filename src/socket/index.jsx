import { io } from 'socket.io-client';
export const socket = io('127.0.0.1:8080', {
    query: {
        token: localStorage.getItem('jwt')
    }
});