const corsProxy = require("cors-anywhere");

const host = "localhost"; // Replace with your desired hostname
const port = 8080; // Replace with your desired port number

const server = corsProxy.createServer({
  originWhitelist: [], // Allow all origins
});

server.listen(port, host, () => {
  console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
});
