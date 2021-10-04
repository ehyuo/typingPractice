import React from 'react';


const ResultSend = (props) => {
    return (
        <div class="resultSend">
            <input
                class="name"
                placeholder="Name"
                onInput={props.onChange}
                value={props.name}
                type="text"
                disabled={props.isDisabled}
                autoFocus />
            {props.isDisabled ?
                <div>Complete</div> :
                <button
                    onClick={props.onClickSendResult}
                    disabled={props.isDisabled}>Send</button>
            }

        </div>
    )
}

export default ResultSend;