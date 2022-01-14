import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import Index from './pages/Index';
import Word from './pages/Word';

function App() {
  const AppStyled = styled.div`
    width: 600px;
    min-width: 375px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #000;

    a {
        text-decoration: none;
        color: #000
    }

    ul {
      list-style: none;
      padding-left : 0px;
    }

    .mainMenuList {
        display : inline-block;
        border: 1px solid #000;
        padding 5px;
        margin-right: 10px;
    }
  `

    return (
        <Router>
            <AppStyled>
                <div className="App">
                    <h1>전자사전</h1>

                    <ul className="mainMenu">
                        <li className="mainMenuList">
                            <Link to={`/`}>단어검색</Link>
                        </li>
                        <li className="mainMenuList">
                            <Link to={`/Word`}>단어시험</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/Word" element={<Word />} />
                    </Routes>
                </div>
            </AppStyled>
        </Router>
    );
}

export default App;
