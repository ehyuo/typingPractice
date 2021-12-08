const InfoField = (props) => {
    return (
        <div class="typing__info">
            <div>{props.language}</div>
            <div>{props.mode}</div>
            {props.longTextTitle!=""?<div>{props.longTextTitle}</div>:""}
        </div>
    )
}

export default InfoField;