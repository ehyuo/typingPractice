import { useEffect, useState } from "react";
import ScoreTable from "./scoreTable";
import Details from "./details"

import Axios from "axios";
import React from "react";

import "./scoreTable.css";
import { useDispatch } from "react-redux";
import { setPageMode } from "../../reducers/pageMode";

const ScoreTableContainer = () => {
  const dispatch = useDispatch();
  const [apiResponce, setApiResponce] = useState([]);
  const [recordPages, setRecordPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [isDetail, setIsDetail] = useState(false);
  const [detailData, setDetailData] = useState([]);

  //레코드 값 받아오기
  useEffect(() => {
    try {
      Axios.get("/records", null, { withCredentials: true }).then((res) => {
        setApiResponce(res.data);
      });
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
      if (i % 10 == 9 || i == apiResponce.length - 1) {
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
  }, [recordPages]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const onClickScore = (e, id) => {
    setDetailData(apiResponce.filter(i => i.id == id));
    setIsDetail(true)
  }
  return (
    !isDetail?
    <ScoreTable
      apiResponce={apiResponce}
      recordPages={recordPages}
      currentPage={currentPage}
      capitalize={capitalize}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}

      onClickScore={onClickScore}
      setPageMode={() => {
        dispatch(setPageMode("result"));
      }}
    /> :
    <Details 
      detailData={detailData}/>
  );
};

export default ScoreTableContainer;
