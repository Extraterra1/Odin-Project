# Simple HTTP Server with Node.js

This is a basic example of a vanilla Node.js HTTP server that serves static HTML files. The server listens on port 8080 and responds to incoming requests by reading corresponding HTML files from the file system. If the requested file is not found, a 404.html file is served instead.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

### Usage

1.  Open a terminal in the project directory.
2.  Run the server:

```bash
    node server.js
```

3.  Open your web browser and navigate to [http://localhost:8080](http://localhost:8080/). You should see the default `index.html` file.

## Project Structure

- `server.js`: The main file containing the Node.js server code.
- `index.html`: The default HTML file served when the root URL is accessed.
- `404.html`: The HTML file served when a requested file is not found.

## Customizing

Feel free to modify the HTML files or add new ones. Update the server code in `server.js` if you want to change the default behavior or add additional features.
