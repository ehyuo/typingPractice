const ScoreChart = (props) => {
    return (
        <div class="scores">
            <table class="chart">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Mode</th>
                        <th>Speed</th>
                        <th>Accuracy</th>
                        <th>Backspace</th>
                    </tr>
                </thead>
                <tbody>
                    {props.isLoading ? "Loading" : props.recordPages[props.currentPage].map((row, idx) => {
                        const className = ((idx % 2) == 0 ? "common" : "alter")
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
            {props.isLoading ? "Loading" : props.recordPages.map((row, idx) => {
                return (
                    <button
                        class="pageBtn"
                        onClick={() => {
                            props.setCurrentPage(idx);
                        }}>{idx + 1}</button>
                )

            })}
            </div>
            <button
                class="back"
                onClick={() => {
                    props.setPageMode();
                }}>Back</button>
        </div>


    )
}

export default ScoreChart;