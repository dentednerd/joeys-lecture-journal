const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log('Request received!!!');
  console.log('Method: ', request.method);
  console.log('Path: ', request.url);

  // Welcome response
  if (request.method === 'GET' && request.url === '/') {
    // response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    const body = {
      status: 'Up and running',
      msg: 'Welcome to our very first super duper server!',
    };
    response.write(JSON.stringify(body));
    response.end();
  }
  // Routes: /api/facts
  if (request.url === '/api/facts') {
    if (request.method === 'GET') {
      fs.readFile('./data/facts.json', 'utf8', (err, fileContents) => {
        if (err) console.log(err);
        else {
          const facts = JSON.parse(fileContents);
          const factsBody = { facts: facts, totalCount: facts.length };
          response.setHeader('Content-Type', 'application/json');
          response.statusCode = 200;
          response.write(JSON.stringify(factsBody));
          response.end();
        }
      });
    }
    if (request.method === 'POST') {
      let body = '';
      request.on('data', (packet) => {
        body += packet.toString();
      });
      request.on('end', () => {
        fs.readFile('./data/facts.json', 'utf8', (err, fileContents) => {
          if (err) console.log(err);
          else {
            const newFact = JSON.parse(body);
            const facts = JSON.parse(fileContents);

            // Generate new unique ID (could/should extract to separate tested function)
            let maxId = 0;
            facts.forEach((fact) => {
              if (fact.factId > maxId) {
                maxId = fact.factId;
              }
            });
            newFact.factId = maxId + 1;

            const newFacts = [...facts, newFact];

            fs.writeFile(
              './data/facts.json',
              JSON.stringify(newFacts),
              (err) => {
                if (err) console.log(err);
                else {
                  // yay!
                  response.setHeader('Content-Type', 'application/json');
                  response.statusCode = 201;
                  response.write(JSON.stringify(newFact));
                  response.end();
                }
              }
            );
          }
        });
      });
    }
  }
});

server.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port: 9090...');
});
