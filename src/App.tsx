import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Index from './pages/Index';
import Word from './pages/Word';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import SideMenuContainer from './containers/SideMenuContainer';
import { RootState } from './module';

function App() {
    const value = useSelector((state: RootState) => state.sideMenu.value);

    const AppStyled = styled.div`
        width: 100%;
        min-width: 375px;
        margin: 0 auto;
        text-align: center;
        padding-top: 20px;
        box-sizing: border-box;

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
                <SideMenuContainer />
                <p>{value}</p>

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/Word" element={<Word />} />
                </Routes>

                {value ? <SideMenu /> : <></>}
                
            </AppStyled>
        </Router>
    );
}

export default App;
