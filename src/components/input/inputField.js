import { React } from 'react';

function InputField(props) {
    return(
        <div class="inputField">
                <input
                    class="typing"
                    type="text"
                    value={props.inputText}
                    onInput={props.onInput}
                    onKeyDown={props.onKeyDown}
                />
            </div>
    );
}

export default InputField;