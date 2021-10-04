import { useEffect, useState } from "react";
import SettingField from "./settingField"
import { setContent, setLanguage, setLoading, setMode, setSetting } from "../../reducers/setting";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { setText, setNextText } from '../../reducers/text/text';
import { setLongTextContent } from '../../reducers/text/longText';


import { resetTypingSpeed } from '../../reducers/typing/typingSpeed';
import { resetTypingProgress, setGoalProgress } from '../../reducers/typing/typingProgress';
import { resetTyipingAccuracy } from '../../reducers/typing/typingAccuracy';
import { resetBackSpace } from '../../reducers/typing/typingBackspace';
import Axios from "axios";
import { setPageMode } from "../../reducers/pageMode";

const SettingContainer = () => {
    const dispatch = useDispatch();

    const [notice, setNotice] = useState(false);

    const [selectedMode, setSelectedMode] = useState("sentence");
    const [selectedLanguage, setSelectedLanguage] = useState("english");
    const [selectedLongText, setSelectedLongText] = useState("");

    const [longTextList, setLongTextList] = useState([]);

    const [isLanguageSelecting, setIsLanguageSelecting] = useState(false);
    const [isModeSelecting, setIsModeSelecting] = useState(false);

    const text = useSelector(state => state.text.text);
    const isFinished = useSelector(state => state.typingProgress.isFinished);
    const { isLoading, isSetting, mode, language, content } = useSelector(state => ({
        isLoading: state.setting.isLoading,
        isSetting: state.setting.isSetting,
        mode: state.setting.mode,
        language: state.setting.language,
        content: state.setting.content
    }));

    let history = useHistory();
    
    useEffect(() => {
        if (selectedMode == "longText") {
            Axios.post("http://localhost:3001/content/getTitles",
                { language: selectedLanguage },
                { withCredentials: true })
                .then((res) => {
                    setLongTextList(res.data);
                })
        }
    }, [selectedLanguage, selectedMode]);




    const contentProcessing = () => {
        try {
            dispatch(setLanguage(selectedLanguage));
            dispatch(setMode(selectedMode));
            console.log(selectedLanguage);
            //콘텐트 불러오기
            Axios.post("http://localhost:3001/content/getContent",
                {
                    language: selectedLanguage,
                    mode: selectedMode,
                    title: selectedLongText
                },
                { withCredentials: true })
                .then((res) => {
                    dispatch(setContent(res.data));
                    if (selectedMode == "longText") {
                        let arr = [];
                        let count = parseInt(res.data[0].content.length / 200) + 1;
                        for (let i = 0; i < parseInt(res.data[0].content.length / 200) + 1; i++) {
                            arr.push(res.data[0].content.substring(i * 200, (i + 1) * 200).trim());
                        }
                        arr.push('');
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
            (selectedMode == "longText" && selectedLongText == "")) {
            setNotice(true);
        } else {
            contentProcessing();
            dispatch(setPageMode("typing"));
        }
    }


    return (
        <div>
            <SettingField
                notice={notice}

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
            >
            </SettingField>
            
        </div>

    )
}

export default SettingContainer;