import SimpleResultChart from "./simpleResultChart";
import ContentCount from "./contentCount";
import GettingStarted from "./gettingStarted";
import { useEffect, useState } from "react";

import "./index.css"
import Axios from "axios";

import { setPageMode } from "../../reducers/pageMode";
import { useDispatch } from "react-redux";


const IndexContainer = () => {
    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [longTextCount, setLongTextCount] = useState(0);
    
    
    useEffect(() => {
        Axios.post("http://localhost:3001/record/getRecords",
        null,
        { withCredentials: true })
        .then((res) => {
            setRecordList(res.data.slice(0, 5));
        })
    }, []);

    useEffect(() => {
        Axios.post("http://localhost:3001/content/contentCount",
        null,
        { withCredentials: true })
        .then((res) => {
            res.data.map(row => {
                if(row.mode == "sentence")
                    setSentenceCount(sentenceCount+1);
                if(row.mode == "word") 
                    setWordCount(wordCount+1);
                if(row.mode == "longText") 
                    setLongTextCount(longTextCount+1);
            });
        })
    }, []);

    return (
        <div class="index">
            <h3>typingPractice</h3>
            <div class="middleComponent">
                <SimpleResultChart
                    recordList={recordList}/>
                <ContentCount 
                    sentenceCount={sentenceCount}
                    wordCount={wordCount}
                    longTextCount={longTextCount}/>
            </div>
            <GettingStarted 
                gettingStarted={() => {
                    dispatch(setPageMode("setting"))
                }}/>
        </div>
    )
}

export default IndexContainer;