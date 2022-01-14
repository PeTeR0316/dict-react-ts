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

const Word = () => {
    const [translateText, setTranslateText] = useState('');
    const [result, setResult] = useState([]);

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
                <h2>단어 리스트</h2>
            </div>
        </IndexStyled>
    )
}

export default Word;