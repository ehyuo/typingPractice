import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Axios from "axios";

import SettingField from "./settingField"

//set reducers
import { setContent, setLanguage, setLoading, setMode, setSetting } from "reducers/setting";
import { setText, setNextText, resetText } from 'reducers/text/text';
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
    const [priview, setPriview] = useState("");
    const [selectedMode, setSelectedMode] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedLongText, setSelectedLongText] = useState("");

    const [longTextList, setLongTextList] = useState([]);

    //is Selecting states
    const [isLanguageSelecting, setIsLanguageSelecting] = useState(false);
    const [isModeSelecting, setIsModeSelecting] = useState(false);
    const [isLongTextSelecting, setIsLongTextSelecting] = useState(false);

    const isFinished = useSelector(state => state.typingProgress.isFinished);
    
    //initalize
    useEffect(() => {
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
        printPriview();
    }, [selectedLanguage, selectedMode, selectedLongText])
    const printPriview = () => {
        try {
            Axios.get(
                (selectedMode == "longText") ? 
                `/contents/${selectedLanguage}/${selectedMode}/${selectedLongText}`:
                `/contents/${selectedLanguage}/${selectedMode}/null`,    
                null, 
                { withCredentials: true })
                .then((res) => {
                    try {
                        setPriview(res.data[0].content);
                        console.log(res.data[0].content)
                    } catch(err) {
                        console.log(err);
                    }
                })
        } catch(err) {
            console.log(err);
        }
    }
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
                        dispatch(setText(res.data[Math.floor(Math.random() * res.data.length)].content));
                        dispatch(setNextText(res.data[Math.floor(Math.random() * res.data.length)].content));
                        dispatch(setGoalProgress(10));
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
                priview={priview}
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