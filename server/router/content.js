const express = require('express');
const { v4: uuidv4 } = require('uuid');

const Record = require('../models/record');
const router = express.Router();

const Content = require('../models/content');

router.get("/count", async (req, res, next) => {
    try {
        const sentences = await Content.findAll({
            where: {
                mode: "sentence"
            }
        });
        const words = await Content.findAll({
            where: {
                mode: "word"
            }
        });
        const longTexts = await Content.findAll({
            where: {
                mode: "longText"
            }
        });
        res.send({
            sentenceCount: Object.keys(sentences).length,
            wordCount: Object.keys(words).length,
            longTextCount: Object.keys(longTexts).length,
        })
        
    } catch (err) {
        console.error(err);
        next(err);
    }
})



router.get('/titles/:language', async (req, res, next) => {
    try {
        const info = await Content.findAll({
            where: {
                language: req.params.language,
                mode: "longText"
            },
            attributes: ['title', 'content']
        });
        res.send(info);
    } catch (err) {
        console.error(err);
        next(err);
    }
})


router.get('/:language/:mode/:title', async (req, res, next) => {
    let content = {}
    const language = req.params.language;
    const mode = req.params.mode;
    try {
        content = await Content.findAll({
            where: {
                language: language,
                mode: mode,
                title: req.params.title == "null" ? null : req.params.title
            }
        })
        res.send(content);
    } catch (err) {
        console.error(err);
        next(err);
    }
})


router.post('/createContent/:text', async (req, res, next) => {
    try {
        const cret = await Content.create({
            id: uuidv4(),
            language: "english",
            mode: "longText",
            title: "The Trees and the Axe",
            content: "A Woodman went into the forest and begged of the Trees the favour of a handle for his Axe. The principal Trees at once agreed to so modest a request, and unhesitatingly gave him a young ash sapling, out of which he fashioned the handle he desired. No sooner had he done so than he set to work to fell the noblest Trees in the wood. When they saw the use to which he was putting their gift, they cried, “Alas! alas! We are undone, but we are ourselves to blame. The little we gave has cost us all: had we not sacrificed the rights of the ash, we might ourselves have stood for ages."
        })
        res.send(true);
    } catch (err) {
        console.error(err);
        next(err);
    }

})
module.exports = router;