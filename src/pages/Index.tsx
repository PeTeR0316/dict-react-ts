import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { response } from 'express';

const IndexStyled = styled.div`
    .translateArea {
        width: 300px;
        height: 6.25em;
        resize: none;
    }
    
    .translateBtn {
        width: 300px;
    }

    .translateResultArea {
        width: 300px;
        text-align: left;
        margin: 0 auto;
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
            <div>
                {/* <select name="source" id="source" onChange={({target}) => {setSource(target.value)}}>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <select name="target" id="target" onChange={({target}) => {setTarget(target.value)}}>
                    <option value="ko">한국어</option>
                    <option value="en">영어</option>
                </select> */}

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
                <p>해석 : {result}</p>
            </div>

        </IndexStyled>
    )
}

export default Index;