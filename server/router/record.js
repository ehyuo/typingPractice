const express = require('express');
const { v4: uuidv4 } = require('uuid');

const Record = require('../models/record');
const router = express.Router();


//GET requests
router.get('/', async (req, res, next) => {
    try{
        const records = await Record.findAll({
            order: [["createdAt", "DESC"]]
        });
        res.send(records);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

//POST requests
router.post('/', async (req, res, next) => {
    try{
        
        const record = await Record.create({
            id: uuidv4(),
            name: req.body.name,
            language: req.body.language,
            title: req.body.title,
            mode: req.body.mode,
            speed: req.body.speed,
            accuracy: req.body.accuracy,
            backspace: req.body.backspace
        });
        res.send(true);
    } catch(err){
        console.error(err);
        next(err);
    }
})

module.exports = router;