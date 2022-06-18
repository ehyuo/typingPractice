const Details = (props) => {
    return (
        <div class="score-table">
            <div>{props.detailData[0].name}</div>
            <div>{props.detailData[0].language}</div>
            <div>{props.detailData[0].mode}</div>
            <div>{props.detailData[0].title}</div>
        </div>


    )
}

export default Details;