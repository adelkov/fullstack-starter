import { Server } from 'socket.io'
import prisma from "../../lib/prisma";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io')
    
    const io = new Server(res.socket.server)
    
    io.on('connection', async socket => {
      socket.broadcast.emit('a user connected')
      socket.on('hello', msg => {
        socket.emit('hello', 'world!')
      })
    })
    
    res.socket.server.io = io
  } else {
    console.log('socket.io already running')
  }
  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default ioHandler
