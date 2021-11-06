import React from 'react';

function Sentence(props) {
    return (
            <div class="sentence">
                {props.printResultText}
                <br/>
                <a id="nextSentence">{props.nextSentence}</a>
            </div>
    )
}

export default Sentence;