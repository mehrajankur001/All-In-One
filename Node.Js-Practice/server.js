const express = require('express');
const bodyParser = require('body-parser');
const members = require('./Members');
const logger = require('./logger');

//

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3333;
app.use(logger);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/app.html');
});

app.use('/api/members', require('./router/api/members'));


app.listen(PORT, () => {
    console.log(`Serve ${PORT}`);
})