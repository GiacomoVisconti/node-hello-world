console.log('Hello Boolean');

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Boolean!');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log(chalk.bgGreen('Incredibile Funziona, che cu...fortuna :)'));
});

// run with `node server.mjs`


import dotenv from 'dotenv'
import chalk from 'chalk';
import axios from 'axios';
import { error } from 'node:console';

console.log(chalk.red("Ciao Tizio " + process.env.password));

// fetch(process.env.photo_api)
// .then(res => res.json())
// .then((data) => {
//   data.forEach((element)=>{
    
//     console.log(chalk.bgBlue(element.title));
//   })
// })

axios.get(process.env.photo_api)
.then(res=>{

  res.data.forEach((element)=>{
    
    console.log(chalk.bgBlue(element.title), chalk.bgYellow(element.date));
  })

})
.catch(error =>{
  console.error(error)
})



