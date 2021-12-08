const ResultInfo = (props) => {
    return (
        <table class="result__info">
            <tbody>
                <tr>
                    <td><a class="result__name">Language</a></td>
                    <td><a class="result__value">{props.language}</a></td>
                </tr>
                <tr>
                    <td><a class="result__name">Mode</a></td>
                    <td><a class="result__value">{props.mode}</a></td>
                </tr>
                <tr>
                    <td><a class="result__name">Speed Average</a></td>
                    <td><a class="result__value">{props.speedAverage}</a></td>

                </tr>
                <tr>
                    <td><a class="result__name">Accuracy Average</a></td>
                    <td><a class="result__value">{props.accuracyAverage}%</a></td>
                </tr>
                <tr>
                    <td><a class="result__name">Backspace Count </a></td>
                    <td><a class="result__value">{props.backspaceCount}</a></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ResultInfo;