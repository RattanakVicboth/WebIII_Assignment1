const http = require("http");  // Corrected "htttp" to "http"
const port = process.env.PORT || 3000;  // Corrected "ProcessingInstruction" to "process"

// Create the server with a simple request handler
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });  // Set status code and content type
    res.end("Hello, World! Welcome to my server!");  // End response with a custom message
});

// Start the server and log the port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Optional: Handle SIGINT (Ctrl+C) gracefully to shut down server
process.on('SIGINT', () => {
    console.log("\nShutting down the server gracefully...");
    server.close(() => {
        console.log("Server has been shut down.");
        process.exit(0);
    });
});


let globalVar = "Global Scope"

function localFunction(){
    console.log('1 ${globalVar}')
    let localVar =  "Local Scope"
    console.log('2 ${blockVar}')
    if (true){
        let blockVar = "If scope block"
    }
}
















