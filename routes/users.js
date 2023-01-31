import express from 'express';

const AWS = require('aws-sdk');

const router = express.Router();

let users = [];

// router.get('/', getUsers);

router.get('/', (req, res) => {
    console.log(`Users in the database ${users}`);
    res.send(users);
    console.log("mail to verify"+ user.email);

    // Getting the email to sent to the

})
// router.post('/', createUser);

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);


    console.log(`User [${user.email}] added to the database.`);
})

// router.get('/:id', getUser);

router.get('/:id', (req, res) => {
    res.send(req.params.id);

})

export default router;