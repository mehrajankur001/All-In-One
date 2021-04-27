const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'ejs');

var item = '';
var toDoList = [];
var workList = [];

app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }

    var day = today.toLocaleDateString('en-us', options);

    res.render('index', { listName: day, newItems: toDoList });
});

app.post('/', (req, res) => {
    //var toDoList = [];
    item = req.body.newItem;

    if (req.body.list !== 'Work') {
        if (item !== '') {
            toDoList.push(item);
        }
        res.redirect('/');
    }
    else {
        if (item !== '') {
            workList.push(item);
        }
        res.redirect('/work');
    }

});

app.get('/work', (req, res) => {

    var day = "Work List";
    res.render('index', { listName: day, newItems: workList });
});


app.listen(3000, () => console.log(`Server 3000`));