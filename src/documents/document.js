export function returnTexts(language, mode) {
    if (language == "hangul") {
        if(mode == "sentence"){
            return [
                '',
                '개 눈에는 똥만 보인다.',
                '개는 잘 짖는다고 좋은 개가 아니다.',
                '개도 닷새만 되면 주인을 안다.',
                '개미 구멍이 둑을 무너뜨릴 수도 있다.',
                '고슴도치에 놀란 호랑이 밤송이 보고 절한다.'
            ];
        } else if(mode == "word") {
            return [
                '사자',
                '호랑이'
            ];
        } else if(mode == "longText") {
            return [
                "왜 나의 키보드는 오지 않는 것인가?"
            ];
        }
    } else if (language == "english"){
        if(mode == "sentence"){
            return [
                'A big fish in a little pond.',
                'A barking dog never bites.',
                'A good medicine tastes bitter.',
                'A burnt child dreads the fire.',
                'No pain No gain.',
                'Walls have ears.',
                'The more, the better.',
                'A bad workman blames his tools.'
            ];
        } else if(mode == "word") {
            return [
                'ear',
                'phone',
                'note',
                'book',
                'cup',
                'table',
                'mouse'
            ];
        } else if(mode == "longText") {
            return [
                { title: "hoho",
                  content: ""},
                { title: "Interstellar",
                  content: ""}
                ];        
        }
    }
}
