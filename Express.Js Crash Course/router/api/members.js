const express = require('express');
const members = require('../../Members');
const router = express.Router();
//Gets all members
router.get('/', (req, res) => {
    res.json(members);
});

//get single member
router.get('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));
    console.log(found);
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).send(`<h1>Member with id: ${parseInt(req.params.id)} is not found</h1>`)
    }

});

module.exports = router;