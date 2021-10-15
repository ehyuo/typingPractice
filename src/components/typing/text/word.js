import React from 'react';

function Word(props) {
    return (
        <div>
            <div class="word">
                <a class="wordnow">{props.printResultText}</a>
                <a id="nextSentence">{props.nextWord}</a>
            </div>
        </div>
    )
}

export default Word;