import { React, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis } from 'recharts';


function ScoreField(props) {
    return (
        <div class="score">
            <div class="speed">
                <a class="type">Typing Speed</a>
                <a class="num">{props.speed}</a>
                <div class="graph">
                    <span style={{
                        width: `${props.speed / 10}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="speed">
                <a class="type">Max Speed</a>
                <a class="num">{props.maxSpeed}</a>
                <div class="graph" >
                    <span style={{
                        width: `${props.maxSpeed / 10}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="speed">
                <a class="type">Progress</a>
                <a class="num">{Math.floor(props.progress)}%</a>
                <div class="graph" >
                    <span style={{
                        width: `${props.progress}%`,
                        transition: "0.5s all"
                    }}> </span>
                </div>
            </div>
            <div class="speed" >
                <a class="type">Accuracy</a>
                <a class="num">{props.accuracy}%</a>
                <div class="graph">
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