import './setting.css';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';

const SettingField = (props) => {
    return (
        <div class="setting">
            <div class="setting__main-section">
                <div class="setting__item">
                    <div class="setting__name">Language</div>
                    <button
                        class="setting__button"
                        onClick={() => {
                            props.setIsLanguageSelecting(!props.isLanguageSelecting)
                        }}>{props.selectedLanguage == "english" ? "English" : "한글"}</button>
                    <CSSTransition
                        in={props.isLanguageSelecting}
                        timeout={500}
                        classNames="setting__dropdown"
                        unmountOnExit>
                        <div class="setting__list setting__list--language">
                            <button
                                class="setting__button"
                                onClick={() => {
                                    props.setSelectedLanguage("english")
                                    props.setIsLanguageSelecting(false)
                                }}>
                                English
                            </button>
                            <button
                                class="setting__button"
                                onClick={() => {
                                    props.setSelectedLanguage("hangul")
                                    props.setIsLanguageSelecting(false)
                                }}>
                                한글
                            </button>
                        </div>
                    </CSSTransition>
                </div>

                <div class="setting__item">
                    <div class="setting__name">Mode</div>
                    <button
                        class="setting__button"
                        onClick={() => {
                            props.setIsModeSelecting(!props.isModeSelecting)
                        }}>{props.selectedMode == "sentence" ? "Sentence" :
                            props.selectedMode == "word" ? "Word" : "LongText"}</button>
                    <CSSTransition
                        in={props.isModeSelecting}
                        timeout={500}
                        classNames="setting__dropdown"
                        unmountOnExit>
                        <div class="setting__list setting__list--mode">
                            <button
                                class="setting__button"
                                onClick={() => {
                                    props.setSelectedMode("sentence")
                                    props.setIsModeSelecting(false)
                                }}>Sentence
                            </button>
                            <button
                                class="setting__button"
                                onClick={() => {
                                    props.setSelectedMode("word")
                                    props.setIsModeSelecting(false)
                                }}>Word
                            </button>
                            <button
                                class="setting__button"
                                onClick={() => {
                                    props.setSelectedMode("longText")
                                    props.setIsModeSelecting(false)
                                }}>LongText
                            </button>
                        </div>
                    </CSSTransition>
                </div>
            </div>


            {props.selectedMode == "longText" ? <a class="setting__name">LongText Lists<br /></a> : ""}
            <div class="setting__list setting__list--long-text">

                {props.selectedMode == "longText" ?
                    (props.longTextList.map(row => {
                        return (
                            <button
                                class={props.selectedLongText == row.title ?
                                    "setting__button setting__button--long setting__button--selected" :
                                    "setting__button setting__button--long"} 
                                onClick={() => { props.setSelectedLongText(row.title) }}>
                                    <div class="setting__name--long-text">
                                        {row.title}
                                    </div>
                                    <div class="setting__page-count">
                                        {Math.floor((row.content.length / 200) + 1)}pages
                                    </div>

                            </button>
                        )

                    })) : ""}
            </div>
            <div class="setting__confirm">
                <button
                    class="setting__button setting__button--confirm"
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