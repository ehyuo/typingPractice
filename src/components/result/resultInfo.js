const ResultInfo = (props) => {
    return (
        <div class="result__info">
            <div class="result__line">
                <span class="result__name">Language</span>
                <span class="result__value">{props.language}</span>
            </div >
            <div class="result__line">
                <span class="result__name">Mode</span>
                <span class="result__value">{props.mode}</span>
            </div>
            <div class="result__line">
                <span class="result__name">Speed Average</span>
                <span class="result__value">{Math.floor(props.speedAverage)}<div class="result__unit"> CPM</div></span>
            </div>
            <div class="result__line">
                <span class="result__name">Accuracy Average</span>
                <span class="result__value">{Math.floor(props.accuracyAverage)} <div class="result__unit">%</div></span>
            </div>
            <div class="result__line">
                <span class="result__name">Backspace Count </span>
                <span class="result__value">{props.backspaceCount}<div class="result__unit"> times</div></span>
            </div>
        </div>
    )
}

export default ResultInfo;