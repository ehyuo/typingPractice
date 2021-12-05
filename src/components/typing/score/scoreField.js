import { React, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis } from 'recharts';
import "./score.css";

function ScoreField(props) {
    return (
        <div class="score">
            <div class="score__item">
                <a class="score__name">Typing Speed</a>
                <a class="score__value">{props.speed}</a>
                <div class="score__graph">
                    <span style={{
                        width: `${props.speed / 10}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="score__item">
                <a class="score__name">Max Speed</a>
                <a class="score__value">{props.maxSpeed}</a>
                <div class="score__graph">
                    <span
                        style={{
                        width: `${props.maxSpeed / 10}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="score__item">
                <a class="score__name">Progress</a>
                <a class="score__value">{Math.floor(props.progress)}%</a>
                <div class="score__graph" >
                    <span style={{
                        width: `${props.progress}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="score__item" >
                <a class="score__name">Accuracy</a>
                <a class="score__value">{props.accuracy}%</a>
                <div class="score__graph">
                    <span style={{
                        width: `${props.accuracy}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>

            </div>
        </div>
    )
}

export default ScoreField;