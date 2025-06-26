console.log('Hello Boolean');

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Boolean!');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`


import dotenv from 'dotenv'
import { log } from 'node:console';

console.log("Ciao Tizio " + process.env.password);

fetch(process.env.photo_api)
.then((res => res.json()))
.then((data) => {
  data.forEach((element)=>{
    
    console.log(element.title);
  })
})

