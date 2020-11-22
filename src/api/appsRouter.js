const express = require('express');
const router = express.Router();
const AppModel = require('../models/AppModel');

router.get('/list', (req, res) => {
    AppModel.find((err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

router.post('/add', (req, res) => {
    const app = req.body;
    AppModel.create(app, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

module.exports = router;