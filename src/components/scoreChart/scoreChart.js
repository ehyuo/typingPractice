const ScoreChart = (props) => {
    return (
        <div class="score-chart">
            <table class="score-chart__scores">
                <tbody>
                    <tr class="score-chart__table-head">
                        <td>Name</td>
                        <td>Language</td>
                        <td>Mode</td>
                        <td>Speed</td>
                        <td>Accuracy</td>
                        <td>Backspace</td>
                    </tr>
                    {props.isLoading ? <div style={{ fontSize: "30px" }}>Loading</div> : props.recordPages[props.currentPage].map((row, idx) => {
                        const className = ((idx % 2) == 0 ? "score-chart__raw score-chart__raw--common" : "score-chart__raw score-chart__raw--alter")
                        return (
                            <tr class={className}>
                                <td>{row.name}</td>
                                <td>{row.language}</td>
                                <td>{row.mode}</td>
                                <td>{row.speed}</td>
                                <td>{row.accuracy}</td>
                                <td>{row.backspace}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div class="pages">
            {props.isLoading ? "" : props.recordPages.map((row, idx) => {
                return (
                    <button
                        class="pageBtn"
                        onClick={() => {
                            props.setCurrentPage(idx);
                        }}>{idx + 1}</button>
                )

            })}
            </div>
        </div>


    )
}

export default ScoreChart;