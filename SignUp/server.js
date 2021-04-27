const express = require('express');
const bP = require('body-parser');

const app = express();
app.use(bP.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/app.html');
});

const obj = {
    account: []
}

app.post('/', (req, res) => {

    const info = {
        fName: req.body.fname,
        lName: req.body.lname,
        email: req.body.email,
        password: req.body.password
    }
    console.log(Object.keys(info).length === 0 && empty.constructor === Object);
    console.log(info.fName);

    if (info.fName !== undefined) {
        obj.account.push(info);
    }



    res.json(obj);
    console.log(obj)
});


app.get('/info', (req, res) => {
    res.json({
        fName: req.body.fname,
        lName: req.body.lname,
        email: req.body.email,
    })
})

app.listen(9999, () => {
    console.log("Running on 9999");
})