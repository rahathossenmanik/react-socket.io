import React from 'react';
import { io } from 'socket.io-client';

const Home = () => {
  const socket = io('');

  try {
    // send a message to the server
    socket.emit('hello from client', 5, '6', { 7: Uint8Array.from([8]) });
    console.log('hello from client');
  } catch (error) {
    console.log(error);
  }

  try {
    // receive a message from the server
    socket.on('hello from server', (...args) => {
      console.log('hello from server', ...args);
    });
    console.log('hello from server');
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <h1 as="h1">Socket.io</h1>
    </>
  );
};

export default Home;
