import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import 'colors';
dotenv.config({ path: path.join(__dirname, '..', 'config', '.env.local') });
import './database/database';
import authRoutes from './routes/authRoutes';
const server = express();

const PORT = 5000;

server.use('/api/auth', authRoutes);

server.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`.green.bold);
});
