const ContentCount = (props) => {
    return(
        <div class="index__panel index__panel--count">
            <div class="index__count"><div class="index__value--count">{props.sentenceCount}</div><div class="index__text--count">sentences</div></div>
            <div class="index__count"><div class="index__value--count">{props.wordCount}</div><div class="index__text--count">words</div></div>
            <div class="index__count"><div class="index__value--count">{props.longTextCount}</div><div class="index__text--count">longtexts</div></div> 
            
        </div>
    )
}
//unbuntu mono rubik
export default ContentCount;