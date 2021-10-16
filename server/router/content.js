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
    const title = req.params.title || "";
    try {
        content = await Content.findAll({
            where: {
                language: language,
                mode: mode,
                title: title
            }
        })
        res.send(content);
    } catch (err) {
        console.error(err);
        next(err);
    }
})


router.post('/createContent', async (req, res, next) => {
    try {
        console.log("hangul");
        const cret = await Content.create({
            id: uuidv4(),
            language: "english",
            mode: "longText",
            title: "example1",
            content: "The division of Europe into a number of independent states, connected, however, with each other, by the general resemblance of religion, language, and manners, is productive of the most beneficial consequences to the liberty of mankind. A modern tyrant, who should find no resistance either in his own breast, or in his people, would soon experience a gentle restraint from the example of his equals, the dread of present censure, the advice of his allies, and the apprehension of his enemies. The object of his displeasure, escaping from the narrow limits of his dominions, would easily obtain, in a happier climate, a secure refuge, a new fortune adequate to his merit, the freedom of complaints, and perhaps the means of revenge.",
        })
        res.send(true);
    } catch (err) {
        console.error(err);
        next(err);
    }

})
module.exports = router;