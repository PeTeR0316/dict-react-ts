import React from 'react';
import styled from 'styled-components';
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

    const SideMenuStyle = styled.div`
        width: ${window.innerWidth};
        height: 100%;
        position: absolute;
        top: 20px;
        right: 0px;
        background-color: rgba(0,0,0,0.6);

        .closeBtn {
            width: 30px;
            height: 30px;
            font-size: 20px;
            border: none;
            background-color: #fff;
            position: relative;
            right: 0;
        }

        .mainMenu {
            width: ${window.innerWidth * 0.6};
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;

            .mainMenuList {
                width: 100%;
                display: inline-block;
                border: none;
            }

        }
    `
    return(
        <SideMenuStyle>
            <button type="button" className="closeBtn" onClick={onSideMenuValue}>X</button>
            <ul className="mainMenu">
                <li className="mainMenuList">
                    <Link to={`/`}>단어검색</Link>
                </li>
                <li className="mainMenuList">
                    <Link to={`/Word`}>단어시험</Link>
                </li>
            </ul>
        </SideMenuStyle>
    )
};

export default SideMenu;