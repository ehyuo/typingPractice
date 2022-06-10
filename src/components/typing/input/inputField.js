import { React } from 'react';

function InputField(props) {
    return (
        <div class="input">
            <div class="input__keyboard">
                <div class="input__line input__line--first">
                    {props.firstLine.map(i => {
                       if(i == "Backspace")
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--backspace input__key--pressed" :"input__key input__key--backspace"}>{i}</div>
                            );        
                        else 
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--pressed" :"input__key"}>{i}</div>
                            );        
                    })}
                </div>
                <div class="input__line input__line--second">
                   {props.secondLine.map(i => {
                       if(i == "Tab")
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--tab input__key--pressed" :"input__key input__key--tab"}>{i}</div>
                            );        
                        else if(i=="\\") {
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--backslash input__key--pressed" :"input__key input__key--backslash"}>{i}</div>
                            );
                        }
                        else 
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--pressed" :"input__key"}>{i}</div>
                            );        
                    })}
                </div>
                <div class="input__line input__line--third">
                 {props.thirdLine.map(i => {
                       if(i == "Caps Lock")
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--caps-lock input__key--pressed" :"input__key input__key--caps-lock"}>{i}</div>
                            );      
                        else if(i == "Enter") {
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--enter input__key--pressed" :"input__key input__key--enter"}>{i}</div>
                            ); 
                        } 
                        else 
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--pressed" :"input__key"}>{i}</div>
                            );        
                    })}
                </div>
                <div class="input__line input__line--fourth">
                 {props.fourthLine.map(i => {
                      if(i=="ShiftLeft") {
                        return (
                            <div class={props.pressedKey.includes(i)? "input__key input__key--shift-left input__key--pressed" :"input__key input__key--shift-left"}>Shift</div>
                        );        
                      }
                       else if(i == "ShiftRight")
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--shift-right input__key--pressed" :"input__key input__key--shift-right"}>Shift</div>
                            );        
                        else 
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--pressed" :"input__key"}>{i}</div>
                            );        
                    })}
                </div>
                <div class="input__line input__line--fifth">
                 {props.fifthLine.map(i => {
    
                       if(i == "Space")
                            return (
                                <div class={props.pressedKey.includes(i)? "input__key input__key--space input__key--pressed" :"input__key input__key--space"}></div>
                            );        
                    
                    })}
                </div>
            </div>
            <input
            autoFocus
            class="input__hidden"
            type="text"
            spellcheck="false"
            value={props.inputText}
            onInput={props.onInput}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            onBlur={props.onBlur}
            ref={props.inputRef}
        />
        </div>
        
    );
}

export default InputField;