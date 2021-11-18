const express = require("express");

const app = express();

// NODEMON

// later in the lecture...
// app.use(express.json()) -- MIDDLEWARE, a method inbuilt in express to recognize the incoming Request Object (on POST requests, for example) as a JSON Object

// 1. when path = "/api" and HTTP method = "GET"...
// app.get() takes 2 arguments, path and callback
  // callback takes req and res

app.get("/", (req, res) => {
  // 2. reduce 4 lines to 1...
  // response.setHeader('Content-Type', 'application/json');
  // response.statusCode = 200;
  // response.write(JSON.stringify({ msg: "Hello" }));
  // response.end();
  res.status(200).send({ msg: "Hello" });
});

// 3. acknowledge but don't necessarily build these 3...

// GET /api
// GET /api/facts
// POST /api/facts

// 4. build this PARAMETRIC ENDPOINT:

// GET /api/facts/:fact -- wildcard, could be anything

app.get("/api/facts/:factId", (req, res) => {
  console.log(Object.keys(req));
  const { factId } = req.params;

  // this next bit is NOT express, this is reading files

  // fs.readFile(blaaaaa)

  // 5. ERROR HANDLING (clg the error for now)
});

app.listen(9090, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening for requests...");
  }
});
