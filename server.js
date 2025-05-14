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
//middleware
const bodyParser = require('body-parser');

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
//forstatic
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    console.log('how about now ?')
    next();
})

// app.get('/', (req, res) => {
//     // res.send("hellloooooo heeeloooo");
//     const user = {
//         name : 'Sally',
//         hobby : 'Soccer'
//     }
//     res.send(user);
// })

// app.get('/', (req, res) => {
//     res.send("getting root");
// })

app.get('/:id', (req, res) => {
    //res.send("getting profile");
    //restfulAPI
    // req.query
    // console.log(req.query);

    // req.body

    // req.header
    // console.log(req.header)
    // res.send("getting root");

    // req.params
    console.log(req.params)
    // res.send("getting root");
    res.status(404).send("not found");
});

app.post('/profile', (req, res) => {
    // res.send("hellloooooo heeeloooo");

    console.log(req.body)
    // const user = {
    //     name : 'Sally',
    //     hobby : 'Soccer'
    // }
    // res.send(user);

    // res.send(user);

    res.send('seccedd');


})
app.listen(3000);