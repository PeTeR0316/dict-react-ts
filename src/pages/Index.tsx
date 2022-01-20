import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { response } from 'express';

const IndexStyled = styled.div`
    .langArea {
        width: 100%;
        border-bottom: 1px solid #ddd;
        padding: 15px;
    }

    .inputArea {
        width: ${window.innerWidth}px;
        max-width: 500px;
        border-bottom: 1px solid #ddd;
        padding: 15px;
        display: inline-block;
    }

    .translateArea {
        width: 100%;
        min-height: 6.25em;
        resize: none;
        border: none;
        outline: none;
    }
    
    .translateBtn {
        width: 74px;
        height: 37px;
        background-color: #1eda69;
        border: none;
        border-radius: 20px;
        color: #fff;
    }

    .translateResultArea {
        width: ${window.innerWidth}px;
        max-width: 500px;
        border-bottom: 1px solid #ddd;
        padding: 15px;
        text-align: left;
        display: inline-block;

        .resultText {
            width:100%;
            word-break: keep-all
        }
    }
`

const Index = () => {
    const [translateText, setTranslateText] = useState('');
    const [result, setResult] = useState([]);
    const [source, setSource] = useState("en");
    const [target, setTarget] = useState("ko");
    

    const fnTranslate = () => {
        axios.get(`http://localhost:3001/search/keyword/${translateText}`)
            .then(response => {
                setResult(response.data.translatedText);
            })
            .catch(err => console.log(err));
    }

    return (
        <IndexStyled>
            <div className="langArea">
                <select name="source" id="source" onChange={({target}) => {setSource(target.value)}}>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <select name="target" id="target" onChange={({target}) => {setTarget(target.value)}}>
                    <option value="ko">한국어</option>
                    <option value="en">영어</option>
                </select>
            </div>
            <div className="inputArea">
                <textarea 
                    className="translateArea" 
                    placeholder="번역할 내용을 입력해 주세요."
                    onChange={({target}) => setTranslateText(target.value)}
                />
                <button type="button" className="translateBtn" onClick={fnTranslate}>
                    번역
                </button>
            </div>

            <div className="translateResultArea">
                <p className="resultText">{result}</p>
            </div>

        </IndexStyled>
    )
}

export default Index;