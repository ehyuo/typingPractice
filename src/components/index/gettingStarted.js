const GettingStarted = (props) => {
    return(
        <div class="gettingStarted">
            <button onClick={() => {
                props.gettingStarted();
            }}>Getting Started</button>
        </div>
    )
}

export default GettingStarted;