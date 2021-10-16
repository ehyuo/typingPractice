import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScoreField from './scoreField';
import { useInterval } from '../../../helper/useInterval';
import { setTypingSpeed } from '../../../reducers/typing/typingSpeed';
import { increaseTimeCount } from '../../../reducers/interval';
import { setFinished } from '../../../reducers/typing/typingProgress';
import { useHistory } from "react-router-dom";
import { setPageMode } from '../../../reducers/pageMode';


function ScoreContainer(props) {
    let history = useHistory();

    const [maxSpeed, setMaxSpeed] = useState(0) ;
    const dispatch = useDispatch();
    const language = useSelector(state => state.setting.language);
    const { speed, lastSpeed } = useSelector(state => ({
        speed: state.typingSpeed.speed,
        lastSpeed: state.typingSpeed.lastSpeed
    }));
    const { progress, goalProgress } = useSelector(state => ({
        progress: state.typingProgress.progress,
        goalProgress: state.typingProgress.goalProgress
    }));

    const { typingCount, timeCount, isRunning, delay } = useSelector(state => ({
        typingCount: state.interval.typingCount,
        timeCount: state.interval.timeCount,
        isRunning: state.interval.isRunning,
        delay: state.interval.delay
      }));

      
    const accuracy = useSelector(state => state.typingAccuracy.accuracy);
    //calculate typingSpeed
    useInterval(() => {
        let t;
        if(language=="hangul") {
            t=Math.floor(typingCount * 120000 / (100 * timeCount));
        } else {
            t=Math.floor(typingCount * 60000 / (100 * timeCount));
        }
        dispatch(setTypingSpeed(t));
        dispatch(increaseTimeCount());
    }, isRunning ? delay : null);

    useEffect(() => {
        if (progress == goalProgress) {
            dispatch(setPageMode("result"));
        }
    }, [progress]);

    useEffect(() => {
        if(lastSpeed>maxSpeed)
            setMaxSpeed(lastSpeed);
    }, [lastSpeed]);

    const speedData = [
        { name: 'Typing Speed', uv: speed },
        { name: 'Last Speed', uv: lastSpeed }];

    const percentData = [
        { name: 'Progress', uv: Math.floor(progress * 100 / goalProgress) },
        { name: 'Accuracy', uv: accuracy }];

    const testData = [
        { uv: speed }
    ];
    return (
        <ScoreField
            testData={testData}
            speed={speed}
            maxSpeed={maxSpeed}
            progress={Math.floor(progress * 100 / goalProgress)}
            accuracy={accuracy}
            speedData={speedData}
            percentData={percentData}>
        </ScoreField>
    )
}

export default ScoreContainer;