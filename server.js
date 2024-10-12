// Import the http module
const http = require('http');
const url = require('url');

// Array of random messages
const messages = [
    "Hello, {name}! Welcome to the server!",
    "Hey {name}, have a great day!",
    "What's up, {name}? Hope you're doing well!",
    "{name}, you're awesome!",
    "Good to see you, {name}!"
];

// Create the server
const server = http.createServer((req, res) => {
    // Parse the URL to get the query parameters
    const queryObject = url.parse(req.url, true).query;

    // Get the 'name' from query string (e.g., ?name=Alice)
    const name = queryObject.name || 'Guest'; // Default to 'Guest' if no name provided

    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Replace {name} placeholder with the actual name
    const personalizedMessage = randomMessage.replace('{name}', name);

    // Write the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the personalized message as the response
    console.log(`Response Message: ${personalizedMessage}`);
    res.end(personalizedMessage);
});

// The server listens on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
