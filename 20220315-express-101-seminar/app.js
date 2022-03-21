const fs = require('fs/promises');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/greeting', (req, res) => {
  res.status(200).send('Hello world!');
});

app.get('/api/facts', (req, res) => {
  fs.readFile('data/facts.json', 'utf8')
    .then((fileContents) => {
      res.send(fileContents);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/api/facts', (req, res) => {
  console.log(req);

  const { body } = req;
  fs.readFile('./data/facts.json', 'utf-8')
    .then((fileContents) => {
      const newFact = body;
      const facts = JSON.parse(fileContents);
      const newFacts = [...facts, newFact];
      fs.writeFile('./data/facts.json', JSON.stringify(newFacts, null, 2))
        .then((err) => {
          if (err) {
            throw err;
          } else {
            res.status(201).send(JSON.stringify({ newFact }))
          }
        });
    });
});

module.exports = app;
