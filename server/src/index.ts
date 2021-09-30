import express from 'express';
const server = express();

const PORT = 5000;

// server.use('/api/');

server.get('/test', (req, res) => {
    res.send('test');
});

server.listen(PORT, () => {
    console.log(`SERVER LISTEN ON PORT : ${PORT}`);
});
