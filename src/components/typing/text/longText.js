import React from 'react';

function LongText(props) {
    return (
        <div class="longText">
            <div>{props.printResultText}</div>
            <div id="pageCount">{props.pageIndex + 1}/{props.pageCount}</div>
        </div>
    )
}

export default LongText;