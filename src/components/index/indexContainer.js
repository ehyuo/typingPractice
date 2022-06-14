import SimpleResultChart from "./simpleResultChart";
import ContentCount from "./contentCount";
import { useEffect, useState } from "react";

import "./index.css"
import Axios from "axios";

import { setPageMode } from "reducers/pageMode";
import { useDispatch } from "react-redux";


const IndexContainer = () => {
    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [longTextCount, setLongTextCount] = useState(0);

    //레코드 불러오기
    useEffect(() => {
        Axios.get("/records",
            null,
            { withCredentials: true })
            .then((res) => {
                setRecordList(res.data.slice(0, 4));
            })
    }, []);

    //컨텐트 갯수 불러오기
    useEffect(() => {
        Axios.get("/contents/count",
            null,
            { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setSentenceCount(res.data.sentenceCount);
                setWordCount(res.data.wordCount);
                setLongTextCount(res.data.longTextCount);
            })
    }, []);

    return (
        <div class="index">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div class="index__title"><span class="material-symbols-outlined">
                keyboard_double_arrow_right
            </span>TypingPractice</div>
            <div class="index__info">
                <SimpleResultChart
                    recordList={recordList} />
                <ContentCount
                    sentenceCount={sentenceCount}
                    wordCount={wordCount}
                    longTextCount={longTextCount} />
            </div>
            <div class="gettingStarted">
                <button onClick={() => {
                    dispatch(setPageMode("setting"))
                }}>Getting Started</button>
            </div>

        </div>
    )
}

export default IndexContainer;