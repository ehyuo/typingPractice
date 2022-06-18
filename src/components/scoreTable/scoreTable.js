const ScoreTable = (props) => {
    return (
        <div class="score-table">
            <div class="score-table__scores">
                    <div class="score-table__line">
                        <div class="score-table__item score-table__item--title">Name</div>
                        <div class="score-table__item score-table__item--title">Language</div>
                        <div class="score-table__item score-table__item--title">Mode</div>
                        <div class="score-table__item score-table__item--title">Title</div>
                        <div class="score-table__item score-table__item--title">Speed</div>
                        <div class="score-table__item score-table__item--title">Accuracy</div>
                        <div class="score-table__item score-table__item--title">Backspace</div>
                    </div>
                    {props.isLoading ? <div style={{ fontSize: "30px" }}>Loading</div> : props.recordPages[props.currentPage].map((row, idx) => {
                        const className = ((idx % 2) == 0 ? "score-table__line score-table__line--common" : "score-table__line score-table__line--alter")
                        return (
                            <div 
                                class={className}
                                onClick={e => props.onClickScore(e, row.id)}>
                                <div class="score-table__item score-table__item--string score-table__item--name">{row.name}</div>
                                <div class="score-table__item score-table__item--string">{props.capitalize(row.language)}</div>
                                <div class="score-table__item score-table__item--string">{props.capitalize(row.mode)}</div>
                                <div class="score-table__item score-table__item--string">{row.title == null ? "-" : row.title}</div>
                                <div class="score-table__item score-table__item--int">{row.speed} <div class="unit">CPM</div></div>
                                <div class="score-table__item score-table__item--int">{row.accuracy}<div class="unit">%</div></div>
                                <div class="score-table__item score-table__item--int">{row.backspace}<div class="unit">times</div> </div>
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

export default ScoreTable;