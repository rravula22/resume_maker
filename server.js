const express = require('express');
const path = require('path');
const resume = require('./routes/getResume');
const app = express();

const port = 3000;
app.use(express.json({
    limit: '50mb',
    type: 'application/json'
}));
app.use('/getResume', resume);
app.use(express.static(path.join(__dirname, 'resume')));
app.get('/', (req, res) => res.redirect('/index.html'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
