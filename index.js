require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Request logger middleware
app.use((req, res, next) => { 
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

// GET /hello returns "Hello, World!"
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// POST /echo returns the request body
app.post('/echo', (req, res) => {
    res.json(req.body);
});

// GET /env returns the environment variables
app.get('/env', (req, res) => {
    res.json({
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
        API_KEY: process.env.API_KEY,
    });
}); 

// GET, protected route
// requires a token in the request header
// uses .env variables to check the token
app.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization']; 

    // Throw an error if the authorization header is missing
    if (!authHeader) {
        return res.status(401).send('Missing Authorization header');
      }
    
    // Remove 'Bearer ' from the token if it exists
    const token = authHeader.replace('Bearer ', '');

    if (token === process.env.token) {
        res.send('Access granted');
    } else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
});

// 404 handler middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
}); 

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});