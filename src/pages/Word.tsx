import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { response } from 'express';

interface DictList {
    title: string,
    linl: string,
    description: string,
    thumbnail?: string
};

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
    const [searchText, setsearchText] = useState('');
    const [result, setResult] = useState([]);

    const fnSearch = () => {
        axios.get(`http://127.0.0.1:3001/search/dict?query=${searchText}`)        
            .then(response => setResult(response.data))
            .catch(err => console.log(err));
    }

    return (
        <IndexStyled>
            <div>
                <h2>단어 리스트</h2>
                <input type="text" onChange={({target}) => setsearchText(target.value)}/>
                <button onClick={fnSearch}>검색</button>

                <button onClick={() => console.log(result[0])}>result</button>

                {result.map((list, index) => {
                    return (
                        <ul key={index}>
                            <li>{list.title}</li>
                            <li>{list.description}</li>
                            <li>{list.link}</li>
                            <li>{list.thumbnail}</li>
                        </ul>
                    )
                })}
            </div>
        </IndexStyled>
    )
}

export default Word;