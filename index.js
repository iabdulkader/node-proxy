const corsProxy = require("cors-anywhere");
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

const server = corsProxy.createServer({
  originWhitelist: [],
});

server.listen(port, host, () => {
  console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
});
