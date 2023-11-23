const express = require("express");
const cors = require("cors");
const app = express();

// Set up CORS with a specific origin
const corsOptions = {
  origin: "https://test.rangsmotors.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.get("/test_api", (req, res) => {
  console.log(req, res,'req, res');
  // Your logic to fetch comments goes here
  // Send back the comments as a response
});

// Rest of your server setup
// ...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
