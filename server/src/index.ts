import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import http from 'http';
import cors from 'cors';
import 'colors';
dotenv.config({ path: path.join(__dirname, '..', 'config', '.env.local') });
import './database/database';
import authRoutes from './routes/authRoutes';

const server = express();
const httpServer = http.createServer(server);

server.use(cors({ origin: 'http://localhost:3000', credentials: true }));
server.use(express.json());
server.use('/api/auth', authRoutes);

httpServer.listen(process.env.PORT, () => {
    console.log(`Listening on port : ${process.env.PORT}`.green.bold);
});
