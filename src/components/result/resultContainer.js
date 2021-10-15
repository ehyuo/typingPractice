import './result.css';

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ResultChart from "./resultChart";
import ResultInfo from "./resultInfo";
import ResultSend from "./resultSend";

import Axios from 'axios';
import { setPageMode } from 'reducers/pageMode';

const ResultContainer = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const { speedList, accuracyList, backspaceCount } = useSelector(state => ({
        speedList: state.typingSpeed.speedList,
        accuracyList: state.typingAccuracy.accuracyList,
        backspaceCount: state.typingBackspace.backspaceCount
    }));

    const { language, mode } = useSelector(state => ({
        language: state.setting.language,
        mode: state.setting.mode,
    }))
    const speedData = speedList.map(row => {
        return ({ speed: row })
    });

    const getAverage = (list) => {
        return (
            list.reduce((a, b) => {
                return a + b;
            }, 0) / list.length
        );
    }
    const onChange = (e) => {
        setName(e.target.value);
    }

    const onClickSendResult = () => {
        if (name == "") {
            console.log('name is required');
        } else {
            Axios.post("/records",
                {
                    name: name,
                    language: language,
                    mode: mode,
                    speed: getAverage(speedList),
                    accuracy: getAverage(accuracyList),
                    backspace: backspaceCount
                },
                { withCredentials: true })
                .then((res) => {
                    setIsDisabled(true);
                })
        }

    }
    return (
        <div class="result">
            <ResultChart
                speedData={speedData}>
            </ResultChart>
            <div class="info">
                <ResultInfo
                    language={language}
                    mode={mode}
                    speedAverage={getAverage(speedList)}
                    accuracyAverage={getAverage(accuracyList)}
                    backspaceCount={backspaceCount}>
                </ResultInfo>
                <ResultSend
                    name={name}
                    onChange={onChange}
                    isDisabled={isDisabled}
                    onClickSendResult={onClickSendResult}>
                </ResultSend>
                <div class="againBtn">
                    <button
                        class="again"
                        onClick={() => {
                            dispatch(setPageMode("setting"));
                        }}> Try it again</button>
                </div>
                <div class="scoreChartBtn">
                    <button
                        class="scoreChart"
                        onClick={() => {
                            dispatch(setPageMode("scoreChart"));
                        }}>Score Chart</button>
                </div>
            </div>


        </div>
    )
}

export default ResultContainer;