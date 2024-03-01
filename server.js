import express from 'express';
import dotenv from 'dotenv';
import jsonserver from './api/json-server.js';
import path from 'path';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

app.use(express.static('public', {
  extensions: ['html', 'htm'],
}));

app.get('/api/json-server', (req, res) => {
    jsonserver(req, res);
})

app.get('/*', function (req, res) {
    const mypath = path.join(process.cwd(), 'public', 'index.html');
    console.log(req.url, mypath);
    res.sendFile(mypath);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


