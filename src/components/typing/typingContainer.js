import ScoreContainer from "./score/scoreContainer"
import TextContainer from "./text/textContainer"
import InputContainer from "./input/inputContainer"

import "./typing.css";

const TypingContainer = () => {
    return (
        <div class="typing">
            <ScoreContainer />
            <TextContainer />
            <InputContainer />            
        </div>
    )
}

export default TypingContainer;