const wsj = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=45e0ee900ced4262a5290bf31edcead3')
.then((response) => {return response.json()});

const techCrunch = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=45e0ee900ced4262a5290bf31edcead3')
.then((response) => {return response.json()});

const usBusiness = fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=45e0ee900ced4262a5290bf31edcead3')
.then((response) => {return response.json()});

const tesla = fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=45e0ee900ced4262a5290bf31edcead3')
.then((response) => {return response.json()});

const apple = fetch('https://newsapi.org/v2/everything?q=apple&from=2023-04-19&to=2023-04-19&sortBy=popularity&apiKey=45e0ee900ced4262a5290bf31edcead3')
.then((response) => {return response.json()});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3500;

app.use(
cors(),
express.json(),
express.urlencoded({extended: true}),
bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-COntrol-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use("/usbusiness", async (req,res) => {res.json(await usBusiness)})
app.use("/wsj", async (req,res)=> {res.json(await wsj)})
app.use("/tech-crunch", async (req,res) => {res.json(await techCrunch)})
app.use("/tesla", async (req,res) => {res.json(await tesla)})
app.use("/apple", async (req,res) => {res.json(await apple)})

app.listen(port, async () => {
    console.log(`Server is listening on port: ${port}`);
});