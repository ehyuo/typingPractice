import { React } from 'react';

function InputField(props) {
    return(
        <div class="inputField">
                <input
                    type="text"
                    spellcheck="false"
                    value={props.inputText}
                    onInput={props.onInput}
                    onKeyDown={props.onKeyDown}
                />
            </div>
    );
}

export default InputField;