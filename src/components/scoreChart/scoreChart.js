const ScoreChart = (props) => {
    return (
        <div class="score-chart">
            <div class="score-chart__scores">
                    <div class="score-chart__line">
                        <div class="score-chart__item score-chart__item--title">Name</div>
                        <div class="score-chart__item score-chart__item--title">Language</div>
                        <div class="score-chart__item score-chart__item--title">Mode</div>
                        <div class="score-chart__item score-chart__item--title">Speed</div>
                        <div class="score-chart__item score-chart__item--title">Accuracy</div>
                        <div class="score-chart__item score-chart__item--title">Backspace</div>
                    </div>
                    {props.isLoading ? <div style={{ fontSize: "30px" }}>Loading</div> : props.recordPages[props.currentPage].map((row, idx) => {
                        const className = ((idx % 2) == 0 ? "score-chart__line score-chart__line--common" : "score-chart__line score-chart__line--alter")
                        return (
                            <div class={className}>
                                <div class="score-chart__item score-chart__item--string">{row.name}</div>
                                <div class="score-chart__item score-chart__item--string">{row.language}</div>
                                <div class="score-chart__item score-chart__item--string">{row.mode}</div>
                                <div class="score-chart__item score-chart__item--int">{row.speed} <div class="unit">CPM</div></div>
                                <div class="score-chart__item score-chart__item--int">{row.accuracy}<div class="unit">%</div></div>
                                <div class="score-chart__item score-chart__item--int">{row.backspace}<div class="unit">times</div> </div>
                            </div>
                        )
                    })}
            </div>
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