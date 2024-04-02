require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const conncectDB = require("./src/db/connectDB");
const server = http.createServer(app);
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 1212;

const main = async () => {
  await conncectDB();

  server.listen(port, () => {
    console.log(`Heliverse server is running on port http://localhost:${port}`);
  });

  app.use(cookieParser());
};

main();
