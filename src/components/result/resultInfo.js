const ResultInfo = (props) => {
    return (
            <div class="resultInfo">
                <table>
                    <tbody>
                        <tr>
                            <td><a class="resultType">Language</a></td>
                            <td><a class="resultLanguage">{props.language}</a></td>
                        </tr>
                        <tr>
                            <td><a class="resultType">Mode</a></td>
                            <td><a class="resultLanguage">{props.mode}</a></td>
                        </tr>
                        <tr>
                            <td><a class="resultType">Speed Average</a></td>
                            <td><a class="resultLanguage">{props.speedAverage}</a></td>

                        </tr>
                        <tr>
                            <td><a class="resultType">Accuracy Average</a></td>
                            <td><a class="resultLanguage">{props.accuracyAverage}</a></td>
                        </tr>
                        <tr>
                            <td><a class="resultType">Backspace Count </a></td>
                            <td><a class="resultLanguage">{props.backspaceCount}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default ResultInfo;