const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

// Sample content to send in response
const content = {
  "name": "Lavanya",
  "age": 25,
  "email": "lavanya@example.com"
};

console.log("Starting server...");

// Specify the allowed origin
const allowedOrigins = ['http://localhost:5003', 'http://127.0.0.1:5500'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject the request
    }
  },
};

app.use(cors(corsOptions));


// Enable CORS with the specified options
app.use(cors(corsOptions));

// Endpoint to serve content
app.get('/', (req, res) => {
  res.send(content);  // Send content directly
  console.log(content);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
