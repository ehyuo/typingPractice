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
        console.log("hangul");
        const cret = await Content.create({
            id: uuidv4(),
            language: "english",
            mode: "longText",
            title: "Lorem Ipsum 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus lacus mattis, vulputate magna a, egestas ex. Nulla facilisi. Pellentesque ut nisl ipsum. Cras porta augue justo, sed rhoncus mauris pulvinar ut. Vivamus at diam condimentum, cursus ante eget, ultricies nulla. Mauris bibendum posuere lacus. Ut velit nulla, scelerisque in elementum vel, efficitur ac libero. Cras efficitur quis nisi sed finibus. Vivamus risus odio, lacinia non elementum quis, tincidunt in nisl. Sed euismod felis dictum diam suscipit congue. Sed lobortis malesuada felis at ultrices. Praesent et diam a tellus egestas porta eget quis sem. Sed non efficitur mi. Morbi convallis velit eu sem scelerisque lobortis. Integer non ligula auctor mi aliquet efficitur. Vestibulum a ultrices metus. Praesent ultrices nulla nec risus rhoncus interdum. Aliquam sed porta libero. Ut sagittis tempor nisl ut egestas. Nulla elementum nisl sit amet sapien viverra, a congue ipsum euismod. Curabitur pellentesque nibh at pellentesque tincidunt. Proin pretium ac lectus non pellentesque. Pellentesque semper lacus ac rutrum malesuada."
        })
        res.send(true);
    } catch (err) {
        console.error(err);
        next(err);
    }

})
module.exports = router;