import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { response } from 'express';

interface DictList {
    title: string,
    link: string,
    description: string,
    thumbnail?: string
};

const IndexStyled = styled.div`
    .searchInput {
        height: 37px;
        margin-right: 15px;
        font-size: 20px;
    }

    .searchBtn {
        width: 74px;
        height: 37px;
        background-color: #1eda69;
        border: none;
        border-radius: 20px;
        color: #fff;
    }

    .searchList {
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
        li {
            text-align: left;
            word-break: keep-all;
        }
    }
`

const Word = () => {
    const [searchText, setsearchText] = useState('');
    const [result, setResult] = useState([] as DictList[]);

    const fnSearch = () => {
        axios.get(`http://127.0.0.1:3001/search/dict?query=${searchText}`)        
            .then(response => setResult(response.data))
            .catch(err => console.log(err));
    }

    return (
        <IndexStyled>
            <div>
                <h2>단어 리스트</h2>
                <input type="text" className="searchInput" onChange={({target}) => setsearchText(target.value)}/>
                <button className="searchBtn" onClick={fnSearch}>검색</button>

                {result.map((list, index) => {
                    return (
                        <ul className="searchList" key={index}>
                            <li>
                                <a href={list.link}>{list.title}</a>
                            </li>
                            <li>{list.description}</li>
                        </ul>
                    )
                })}
            </div>
        </IndexStyled>
    )
}

export default Word;