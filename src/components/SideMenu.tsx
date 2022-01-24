import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../module';
import { sideMenuValue } from '../module/sideMenu';

const SideMenu = () => {
    const value = useSelector((state: RootState) => state.sideMenu.value);
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

    const onSideMenuValue = () => {
        dispatch(sideMenuValue());
    };

    const slideAnimate = keyframes`
        100%{
            transform: translateX(0%);
        }
    `

    const SideMenuStyle = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: rgba(0,0,0,0.6);

        .sideMenuContainer {
            width: 60%;
            max-width: 300px;
            height: 100%;
            background-color: #fff;
            position: absolute;
            right: 0px;
            transform: translateX(100%);

            .closeBtn {
                width: 40px;
                height: 40px;
                font-size: 20px;
                border: none;
                background-color: #fff;
                float: right;
            }
    
            .mainMenu {
                margin-top 40px;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
    
                .mainMenuList {
                    width: 100%;
                    display: inline-block;
                    border: none;
                    padding 5px;
                }
            }            
        }

        .slide {
            animation: ${slideAnimate} 0.5s forwards;
        }
    `
    return(
        <SideMenuStyle>
            <div className={`sideMenuContainer ${value ? 'slide' : ''}`}>
                <button type="button" className="closeBtn" onClick={onSideMenuValue}>X</button>
                <ul className="mainMenu">
                    <li className="mainMenuList">
                        <Link to={`/`}>번역</Link>
                    </li>
                    <li className="mainMenuList">
                        <Link to={`/Word`}>단어검색</Link>
                    </li>
                </ul>
            </div>
        </SideMenuStyle>
    )
};

export default SideMenu;