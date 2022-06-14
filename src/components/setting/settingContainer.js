import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Axios from "axios";

import SettingField from "./settingField"

//set reducers
import { setContent, setLanguage, setLoading, setMode, setSetting } from "reducers/setting";
import { setText, setNextText, resetText, setSentenceList } from 'reducers/text/text';
import { resetPageCount, setLongTextContent, setLongTextTitle } from 'reducers/text/longText';
import { setPageMode } from "reducers/pageMode";

//reset reducers
import { resetTypingSpeed } from 'reducers/typing/typingSpeed';
import { resetTypingProgress, setGoalProgress } from 'reducers/typing/typingProgress';
import { resetTyipingAccuracy } from 'reducers/typing/typingAccuracy';
import { resetBackSpace } from 'reducers/typing/typingBackspace';



const SettingContainer = () => {
    const dispatch = useDispatch();

    const [notice, setNotice] = useState(false);
    const [overview, setOverview] = useState("");
    const [selectedMode, setSelectedMode] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedLongText, setSelectedLongText] = useState("");

    const [longTextList, setLongTextList] = useState([]);

    //is Selecting states
    const [isLanguageSelecting, setIsLanguageSelecting] = useState(false);
    const [isModeSelecting, setIsModeSelecting] = useState(false);
    const [isLongTextSelecting, setIsLongTextSelecting] = useState(false);

    const isFinished = useSelector(state => state.typingProgress.isFinished);
    const longTextTitle = useSelector(state => state.longText.longTextTitle);

    const sentenceList = useSelector(state => state.text.sentenceList);

    //goal count input range
    const [goalCount, setGoalCount]  = useState(10);
    //initalize
    useEffect(() => {
        setGoalCount(10);
        dispatch(resetTypingSpeed());
        dispatch(resetTyipingAccuracy());
        dispatch(resetPageCount());
        dispatch(resetBackSpace());
        dispatch(resetTypingProgress());
        dispatch(resetText());
    }, []);

    useEffect(() => {
        if (selectedMode == "longText") {
            Axios.get(`/contents/titles/${selectedLanguage}`,
                null,
                { withCredentials: true })
                .then((res) => {
                    setLongTextList(res.data);
                })
        }
    }, [selectedLanguage, selectedMode]);

    useEffect(() => {
        printOverview();
    }, [selectedLanguage, selectedMode, selectedLongText, goalCount]);

    const printOverview = () => {
        try {
            Axios.get(
                (selectedMode == "longText") ? 
                `/contents/${selectedLanguage}/${selectedMode}/${selectedLongText}`:
                `/contents/${selectedLanguage}/${selectedMode}/null`,    
                null, 
                { withCredentials: true })
                .then((res) => {
                    try {
                        if(selectedMode == "longText") setOverview(res.data[0].content);
                        else {
                            let temp = [];
                        for(let i=0;i<goalCount;i++) {
                            temp.push(res.data[Math.floor(Math.random() * res.data.length)].content);
                        }
                        setOverview(temp);
                        dispatch(setSentenceList(temp));
                        }
                        
                    } catch(err) {
                        console.log(err);
                    }
                })
        } catch(err) {
            console.log(err);
        }
    }
    
    //앞 문자 대문자로
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const contentProcessing = () => {
        try {
            dispatch(setLanguage(selectedLanguage));
            dispatch(setMode(selectedMode));
            //콘텐트 불러오기
            Axios.get(
                (selectedMode == "longText") ? 
                `/contents/${selectedLanguage}/${selectedMode}/${selectedLongText}`:
                `/contents/${selectedLanguage}/${selectedMode}/null`,    
                null, 
                { withCredentials: true })
                .then((res) => {
                    dispatch(setContent(res.data));
                    if (selectedMode == "longText") {
                        let arr = [];
                        const sliceLength = (selectedLanguage == "hangul")?150:250;
                        let count = parseInt(res.data[0].content.length / sliceLength) + 1;
                        for (let i = 0; i < parseInt(res.data[0].content.length / sliceLength) + 1; i++) {
                            arr.push(res.data[0].content.substring(i * sliceLength, (i + 1) * sliceLength).trim());
                        }
                        arr.push('');
                        dispatch(setLongTextTitle(selectedLongText));
                        dispatch(setLongTextContent(arr, count));
                        dispatch(setText(arr[0]));
                        dispatch(setNextText(arr[1]));
                        dispatch(setGoalProgress(count));
        
                    } else if (selectedMode == "word" || selectedMode == "sentence") {
                        dispatch(setContent(res.data.map(row => {
                            return row.content
                        })));
                        dispatch(setText(sentenceList[0]));
                        dispatch(setGoalProgress(goalCount));
                    }
        
                    if (isFinished == false) {
                        dispatch(resetTypingSpeed());
                        dispatch(resetTyipingAccuracy());
                        dispatch(resetTypingProgress());
                        dispatch(resetBackSpace());
                    }
                })
        } catch (err) {
            console.error(err);
        }
    }

    const onClickConfirm = async () => {
        if (selectedLanguage == "" ||
            selectedMode == "" ||
            (selectedMode == "longText" && selectedLongText == "" ||
            selectedMode == "Mode" ||
            selectedLanguage == "Language")) {
            setNotice(true);
        } else {
            contentProcessing();
            dispatch(setPageMode("typing"));
        }
    }


    return (
        <div>
            <SettingField
                capitalize={capitalize}
                notice={notice}
                overview={overview}
                sentenceList={sentenceList}
                selectedMode={selectedMode}
                selectedLanguage={selectedLanguage}
                selectedLongText={selectedLongText}
                setSelectedLanguage={(language) => {
                    setSelectedLanguage(language);
                }}
                setSelectedMode={(mode) => {
                    setSelectedMode(mode);
                }}
                longTextList={longTextList}
                setSelectedLongText={setSelectedLongText}
                onClickConfirm={onClickConfirm}

                isLanguageSelecting={isLanguageSelecting}
                setIsLanguageSelecting={setIsLanguageSelecting}

                isModeSelecting={isModeSelecting}
                setIsModeSelecting={setIsModeSelecting}

                isLongTextSelecting={isLongTextSelecting}
                setIsLongTextSelecting={setIsLongTextSelecting}

                goalCount={goalCount}
                setGoalCount={setGoalCount}
            >
            </SettingField>
            <button onClick={() => {
                Axios.post("/contents/createContent/못된 송아지 엉덩이에 뿔이 난다.",
                null,
                { withCredentials: true })
            }}>d</button>
        </div>

    )
}

export default SettingContainer;