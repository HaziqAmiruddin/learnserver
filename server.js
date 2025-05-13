// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log('I hear you!. thank you')
//     // console.log('header', request.headers)
//     // console.log('method', request.method)
//     // console.log('url', request.url)

//     // response.setHeader('Content-Type','text/html');
//     // response.end('<h1>Hellooooooo</h1>');

//     const user = {
//         name : 'John',
//         hobby : 'skating'
//     }
//     response.setHeader('Content-type', 'application/json');
//     response.end(JSON.stringify(user));
// })

// server.listen(3000);

////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('HELLOOOO')
    next();
})

app.get('/', (req, res) => {
    // res.send("hellloooooo heeeloooo");
    const user = {
        name : 'Sally',
        hobby : 'Soccer'
    }
    res.send(user);
})

app.get('/', (req, res) => {
    res.send("getting root");
})

app.get('/profile', (req, res) => {
    res.send("getting profile");
})

app.post('/profile', (req, res) => {
    // res.send("hellloooooo heeeloooo");
    const user = {
        name : 'Sally',
        hobby : 'Soccer'
    }
    res.send(user);
})
app.listen(3000);