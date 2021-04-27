const express = require('express');
const members = require('../../Members');
const router = express.Router();
const uuid = require('uuid');

//Get all members
router.get('/', (req, res) => {
    res.json(members);
});

//get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (!found) {
        res.status(400).send('<h1>NOT FOUND</h1>');
    }
    else {
        const member = members.filter(member => member.id === parseInt(req.params.id));
        res.json(member);
    }
});

//Create new Members
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please Include email or email' });
    }
    members.push(newMember);
    res.send(members);

});
//update member
router.put('/:id', (req, res) => {
    const found = members.some(member =>
        member.id === parseInt(req.params.id));

    if (found) {
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;
                res.json({ msg: "Member was Updated", members });
            }
        });
    }
    else {
        res.status(400).send('<h1>NOT FOUND</h1>');
    }
});

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: `Member with id ${req.params.id} is deleted`,
            member: members.filter(m => m.id !== parseInt(req.params.id))
        });
    }
    else {
        res.status(400).json('<h1>Member Not Found<h1>');
    }
})



module.exports = router;