import './setting.css';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';
const SettingField = (props) => {
    return (
        <div class="setting">
            <div class="setting__top">
                <div class="setting__preview">
                    <div class="setting__priview-text">{props.priview}</div>
                    <div class="setting__blur"></div>
                </div>
                <div class="setting__main-section">
                    <div class="setting__raw">
                        <div class="setting__item">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                            <button
                                class="setting__button setting__button--title"
                                onClick={() => {
                                    props.setIsLanguageSelecting(!props.isLanguageSelecting)
                                }}>{props.selectedLanguage == "" ? <div class="setting__unselected">Languages</div> : props.selectedLanguage} <div class="material-symbols-outlined">expand_more</div>
                            </button>
                            <CSSTransition
                                in={props.isLanguageSelecting}
                                timeout={500}
                                classNames="setting__dropdown"
                                unmountOnExit>

                                <div class="setting__list setting__list--language">
                                    <button
                                        class="setting__button setting__button--sub"
                                        onClick={() => {
                                            props.setSelectedLanguage("english")
                                            props.setIsLanguageSelecting(false)
                                        }}>
                                        english
                                    </button>
                                    <button
                                        class="setting__button setting__button--sub"
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
                            <button
                                class="setting__button setting__button--title"
                                onClick={() => {
                                    props.setIsModeSelecting(!props.isModeSelecting)
                                }}>{props.selectedMode == "" ? <div class="setting__unselected">Mode</div> : props.capitalize(props.selectedMode)}<div class="material-symbols-outlined">expand_more</div></button>
                            <CSSTransition
                                in={props.isModeSelecting}
                                timeout={500}
                                classNames="setting__dropdown"
                                unmountOnExit>
                                <div class="setting__list setting__list--mode">
                                    <button
                                        class="setting__button setting__button--sub"
                                        onClick={() => {
                                            props.setSelectedMode("sentence")
                                            props.setIsModeSelecting(false)
                                        }}>Sentence
                                    </button>
                                    <button
                                        class="setting__button setting__button--sub"
                                        onClick={() => {
                                            props.setSelectedMode("word")
                                            props.setIsModeSelecting(false)
                                        }}>Word
                                    </button>
                                    <button
                                        class="setting__button setting__button--sub"
                                        onClick={() => {
                                            props.setSelectedMode("longText")
                                            props.setIsModeSelecting(false)
                                        }}>LongText
                                    </button>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                    {props.selectedMode == "sentence" ?
                        <div class="setting__goal-count">
                            <div class="setting__explain" >Goal Count</div>
                            <div class="setting__range">
                                <div class="setting__value">{props.goalCount}</div>
                                <input
                                    class="setting__bar"
                                    type="range"
                                    min={5}
                                    max={50}
                                    value={props.goalCount}
                                    style={{ backgroundSize: (props.goalCount-5) * 100 /45 + "% 100%"  }}
                                    onChange={({ target: { value: radius } }) => {
                                        props.setGoalCount(radius);
                                    }} />
                            </div>
                        </div> : ""}
                    {props.selectedMode == "longText" ?
                        <div class="setting__item">
                            <div class="setting__explain">Long Text Lists</div>
                            <button
                                class="setting__button setting__button--title"
                                onClick={() => {
                                    props.setIsLongTextSelecting(!props.isLongTextSelecting)
                                }}>{props.selectedLongText == "" ? <div class="setting__unselected">Select Text </div> : props.selectedLongText} <div class="material-symbols-outlined">expand_more</div></button>
                            <CSSTransition
                                in={props.isLongTextSelecting}
                                timeout={500}
                                classNames="setting__dropdown"
                                unmountOnExit>
                                <div class="setting__list setting__list--long-text">
                                    {(props.longTextList.map(row => {
                                        return (
                                            <button
                                                class={props.selectedLongText == row.title ?
                                                    "setting__button setting__button--long setting__button--selected" :
                                                    "setting__button setting__button--long"}
                                                onClick={() => {
                                                    props.setSelectedLongText(row.title)
                                                    props.setIsLongTextSelecting(false)
                                                }}>
                                                <div class="setting__name--long-text">
                                                    {row.title}
                                                </div>
                                                <div class="setting__page-count">
                                                    {Math.floor((row.content.length / (props.selectedLanguage == "hangul" ? 150 : 250)) + 1)}pages
                                                </div>

                                            </button>
                                        )

                                    }))}
                                </div>
                            </CSSTransition>
                        </div> : ""}
                </div>
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