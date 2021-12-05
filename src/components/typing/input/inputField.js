import { React } from 'react';

function InputField(props) {
    return (
        <input
            class="typing__input"
            type="text"
            spellcheck="false"
            value={props.inputText}
            onInput={props.onInput}
            onKeyDown={props.onKeyDown}
        />
    );
}

export default InputField;