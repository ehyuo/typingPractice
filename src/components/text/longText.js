import React from 'react';

function LongText(props) {
    return (
        <div>
            <div class="sentence">
                {props.printResultText}
                <br/>
                <div id="pageCount">{props.pageIndex+1}/{props.pageCount}</div>
            </div>
        </div>
    )
}

export default LongText;