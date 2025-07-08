const express = require('express');
const app = express();

// 🔹 Custom Middleware to add req.user
const addUserMiddleware = (req, res, next) => {
  req.user = 'Guest';
  next();
};

// 🔹 Route that uses the middleware
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// 🔹 Root route with full link to /welcome
app.get('/', (req, res) => {
  res.send(`
    <h2>Home Page</h2>
    <p>Click here to go to the welcome page:</p>
    <a href="http://localhost:3000/welcome">Go to Welcome Page</a>
  `);
});

// 🔹 Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is up and running on port 3000! Ready to handle requests.");
});
