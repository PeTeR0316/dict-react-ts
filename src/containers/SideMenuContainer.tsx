import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../module';
import { sideMenuValue } from '../module/sideMenu';
import Header from '../components/Header';

const SideMenuContainer = () => {
    const value = useSelector((state: RootState) => state.sideMenu.value);
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

    const onSideMenuValue = () => {
        dispatch(sideMenuValue());
    };

    return (
        <>
            <Header
                value={value}
                onSideMenuValue={onSideMenuValue}
            />
        </>
    )
};

export default SideMenuContainer;