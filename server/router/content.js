const express = require('express');
const { v4: uuidv4 } = require('uuid');

const Record = require('../models/record');
const router = express.Router();

const Content = require('../models/content');

router.post("/contentCount", async(req, res, next) => {
    try{
        const list = await Content.findAll();
        res.send(list);
    } catch(err) {
        console.error(err);
        next(err);
    }
})

router.post('/getTitles', async (req, res, next) => {
    try {
        const info = await Content.findAll({
            where: { 
                language: req.body.language,
                mode: "longText"
             },
            attributes: ['title', 'content']
        });
        res.send(info);
    } catch(err) {
        console.error(err);
        next(err);
    }
})
router.post('/getContent', async (req, res, next) => {
    const language = req.body.language;
    const mode = req.body.mode;
    console.log(language);
    let content = {}
    try {
        if(mode == "longText") {
            const title = req.body.title;
            content = await Content.findAll({
                where: {
                    language: language,
                    mode: mode,
                    title: title
                }
            })
        } else {
            content = await Content.findAll({
                where: {
                    language: language,
                    mode: mode
                }
            })
        }
        res.send(content);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

router.post('/createContent', async (req, res, next) => {
    try {
        console.log("hangul");
        const cret = await Content.create({
            id: uuidv4(),
            language: "hangul",
            mode: "sentence",
            title: null,
            content: "개같이 벌어서 정승같이 쓴다.",
        })
        res.send(true);
    } catch(err) {
        console.error(err);
        next(err)   ;
    }
    
})
module.exports = router;