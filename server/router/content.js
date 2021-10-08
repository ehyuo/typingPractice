const express = require('express');
const { v4: uuidv4 } = require('uuid');

const Record = require('../models/record');
const router = express.Router();

const Content = require('../models/content');

router.post("/contentCount", async(req, res, next) => {
    try{
        const list = await Content.findAll();
        console.log(list);
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
            mode: "longText",
            title: "가시",
            content: "너 없는 지금도 눈부신 하늘과 눈부시게 웃는 사람들 나의 헤어짐은 모르는 세상은 슬프도록 그대로인데 시간마저 데려가지 못하게 나만은 널 보내지 못했나봐 가시처럼 깊게 박힌 기억은 아파도 아픈줄 모르고 그대 기억이 지난 사랑이 내 안을 파고 드는 가시가 되어 제발 가라고 아주 가라고 애써도 나를 괴롭히는데 아픈만큼 너를 잊게 된다면 차라리 앓고 나면 그만인데 가시처럼 깊게 박힌 기억은 아파도 아픈줄 모르고 그대 기억이 지난 사랑이 내 안을 파고 드는 가시가 되어 제발 가라고 아주 가라고 애써도 나를 괴롭히는데 너무 사랑했던 나를 크게 두려웠던 나를 미치도록 너를 그리워했던 날 이제는 놓아줘 보이지 않아 내 안에 숨어 잊으려 하면 할수록 더 아파와 제발 가라고 아주 가라고 애써도 나를 괴롭히는데",
        })
        res.send(true);
    } catch(err) {
        console.error(err);
        next(err)   ;
    }
    
})
module.exports = router;