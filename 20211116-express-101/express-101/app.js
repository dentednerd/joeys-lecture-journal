const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

// Routes: /

app.get("/", (req, res) => {
  const body = {
    status: 'Up and running',
    msg: 'Welcome to our very first Express server!',
  };
  res.status(200).send(JSON.stringify(body));
});

// Routes: /api/facts(?isTrue=true)

app.get("/api/facts", (req, res) => {
  const { isTrue } = req.query;
  fs.readFile('./data/facts.json', 'utf8', (err, fileContents) => {
    if (err) console.log(err);
    else {
      const facts = JSON.parse(fileContents);
      let filteredFacts;

      if (isTrue) {
        filteredFacts = facts.filter((currentFact) => currentFact.isTrue.toString() === isTrue);
      }

      const factsBody = {
        facts: isTrue ? filteredFacts : facts,
        totalCount: isTrue ? filteredFacts.length : facts.length
      };

      res.status(200).send(JSON.stringify(factsBody));
    }
  });
});

// Routes: /api/facts/:factId

app.get("/api/facts/:factId", (req, res) => {
  const { factId } = req.params; // object deconstruction
  fs.readFile('./data/facts.json', 'utf8', (err, fileContents) => {
    if (err) console.log(err);
    else {
      const facts = JSON.parse(fileContents);
      const singleFact = facts.filter((currentFact) => {
        return Number(factId) === currentFact.factId
      })[0];
      res.status(200).send(JSON.stringify(singleFact));
    }
  });
});

app.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port: 9090...');
});
