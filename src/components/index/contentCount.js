const ContentCount = (props) => {
    return(
        <div class="simple-info-item">
            <div><a>{props.sentenceCount}</a> sentences,</div>
            <div><a>{props.wordCount}</a> words,</div>
            <div><a>{props.longTextCount}</a> longTexts are available.</div> 
        </div>
    )
}

export default ContentCount;