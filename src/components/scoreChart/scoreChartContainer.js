import { useEffect, useState } from "react";
import ScoreChart from "./scoreChart";
import Axios from "axios";
import React from 'react';

import './scoreChart.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageMode } from "../../reducers/pageMode";

const ScoreChartContainer = () => {
    const dispatch = useDispatch();
    const [apiResponce, setApiResponce] = useState([]);
    const [recordPages, setRecordPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    //레코드 값 받아오기
    useEffect(() => {
        try {
            Axios.get("/records",
                null,
                { withCredentials: true })
                .then((res) => {
                    setApiResponce(res.data);
                })
        } catch (err) {
            console.error(err);
        }
    }, []);

    //페이지 나누기
    useEffect(() => {
        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < apiResponce.length; i++) {
            arr1.push(apiResponce[i]);
            if ((i % 10 == 9) || i == apiResponce.length - 1) {
                arr2.push(arr1);
                arr1 = [];
            }
        }
        setRecordPages(arr2);
    }, [apiResponce]);

    
    useEffect(() => {
        if (recordPages != "") {
            setIsLoading(false);
        }
    }, [recordPages])

    return (
        <div class="scoreChartContainer">
            <ScoreChart
                apiResponce={apiResponce}
                recordPages={recordPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isLoading={isLoading}
                setPageMode={() => {
                    dispatch(setPageMode("result"));
                }} />
        </div>
    )
}


export default ScoreChartContainer;