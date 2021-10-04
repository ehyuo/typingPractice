function ResultMenu(props){
    return(
        <div>
            <button
                onClick={()=>{
                    props.settingMode("sentence");
                }}>
                Back
            </button>
        </div>
    )
}

export default ResultMenu;