import './setting.css';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';
import { useEffect } from 'react';

const SettingField = (props) => {
    return (
        <div class="setting">
            <div class="settingList">
                <div class="language">
                    <div class="title">Language</div>
                    <button
                        class="languageBtn"
                        onClick={() => {
                            props.setIsLanguageSelecting(!props.isLanguageSelecting)
                        }}>{props.selectedLanguage == "english" ? "English" : "한글" }</button>
                    <CSSTransition
                        in={props.isLanguageSelecting}
                        timeout={500}
                        classNames="alert1"
                        unmountOnExit>
                        <div class="languageList">
                            <button
                                onClick={() => {
                                    props.setSelectedLanguage("english")
                                    props.setIsLanguageSelecting(false)
                                }}>
                                English
                            </button>
                            <button
                                onClick={() => {
                                    props.setSelectedLanguage("hangul")
                                    props.setIsLanguageSelecting(false)
                                }}>
                                한글
                            </button>
                        </div>
                    </CSSTransition>
                </div>

                <div class="mode">
                    <div class="title">Mode</div>
                    <button
                        class="modeBtn"
                        onClick={() => {
                            props.setIsModeSelecting(!props.isModeSelecting)
                        }}>{props.selectedMode == "sentence" ? "Sentence" :
                            props.selectedMode == "word" ? "Word" : "LongText"}</button>
                    <CSSTransition
                        in={props.isModeSelecting}
                        timeout={500}
                        classNames="alert1"
                        unmountOnExit>
                        <div class="modeList">
                            <button
                                class={props.selectedMode == "sentence" ? "currentBtn" : "Btn"}
                                onClick={() => {
                                    props.setSelectedMode("sentence")
                                    props.setIsModeSelecting(false)
                                }}>Sentence
                            </button>
                            <button
                                class={props.selectedMode == "word" ? "currentBtn" : "Btn"}
                                onClick={() => {
                                    props.setSelectedMode("word")
                                    props.setIsModeSelecting(false)
                                }}>Word
                            </button>
                            <button
                                class={props.selectedMode == "longText" ? "currentBtn" : "Btn"}
                                onClick={() => {
                                    props.setSelectedMode("longText")
                                    props.setIsModeSelecting(false)
                                }}>LongText
                            </button>
                        </div>
                    </CSSTransition>
                </div>
            </div>


            {props.selectedMode == "longText" ? <a class="title">LongText Lists<br /></a> : ""}
            <div class="longTextList">

                {props.selectedMode == "longText" ?
                    (props.longTextList.map(row => {
                        return (
                            <button class={props.selectedLongText == row.title ? "longCurrentBtn" : "longBtn"} onClick={() => {
                                props.setSelectedLongText(row.title)
                            }}>
                                <div class="longTextList">
                                    <div class="longTextTitle">
                                        {row.title}
                                    </div>
                                    <div class="pageCount">
                                        {Math.floor((row.content.length / 200) + 1)}pages
                                    </div>
                                </div>
                            </button>
                        )

                    })) : ""}
            </div>
            <div class="confirm">
            <button
                class="confirmBtn"
                onClick={() => {
                    props.onClickConfirm()
                }}>
                Confirm
            </button>
            </div>
            
            {props.notice == true ? <div class="notice">There are unselected items</div> : ""}


        </div>


    )
}

export default SettingField;