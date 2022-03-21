const http = require('http');
const fs = require('fs/promises');

const server = http.createServer((request, response) => {
  const { url, method } = request;

  if (url === '/greeting' && method === 'GET') {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ msg: 'Hello World' }));
    response.end();
  }
  if (url === '/api/facts') {
    if (method === "GET") {
      fs.readFile('data/facts.json', 'utf8')
        .then((fileContents) => {
          const facts = JSON.parse(fileContents);
          response.setHeader('Content-Type', 'application/json');
          response.statusCode = 200;
          response.write(JSON.stringify({ facts }));
          response.end();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (method === "POST") { 
      let body = ""
      request.on('data', (packet) => {
        body += packet.toString()
      })
      request.on('end', () => {
        fs.readFile('./data/facts.json', 'utf-8').then((fileContents) => { 
          const newFact = JSON.parse(body)
          const facts = JSON.parse(fileContents)
          const newFacts = [...facts, newFact]
          fs.writeFile('./data/facts.json', JSON.stringify(newFacts, null, 2)).then((err) => { 
            if (err) { 
              console.log(err)
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = 201;
              response.write(JSON.stringify({ newFact }));
              response.end();
            }
          })
        })
      })
    } 
  }

});

server.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log('server listening on port 9090...');
});
