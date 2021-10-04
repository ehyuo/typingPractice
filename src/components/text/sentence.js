import React from 'react';

function Sentence(props) {
    return (
        <div>
            <div class="sentence">
                {props.printResultText}
                <br/>
                <a id="nextSentence">{props.nextSentence}</a>
            </div>
        </div>
    )
}

export default Sentence;