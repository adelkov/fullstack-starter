import { useEffect } from 'react'
import io from 'socket.io-client'
import prisma from "../lib/prisma";

const SocketIO = () => {
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const socket = io()
      
      socket.on('connect', () => {
        console.log('connect')
        socket.emit('hello')
      })
      
      socket.on('hello', data => {
        console.log('hello', data)
      })
      
      socket.on('a user connected', () => {
        console.log('a user connected')
      })
      
      socket.on('disconnect', () => {
        console.log('disconnect')
      })
    })
  })
  
  return <h1>Socket.io</h1>
}

export default SocketIO
