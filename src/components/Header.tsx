import React, { useState } from "react";
import styled from "styled-components";

type VisibleValueProps = {
    value: boolean;
    onSideMenuValue: () => void;
}

const Header = ({value, onSideMenuValue}: VisibleValueProps) => {
    const [visibleValue, setVisibleValue] = useState<boolean>(value);

    const HeaderStyle = styled.header`
        width: 100%
        padding: 20px 10px;

        .title {
            display: inline-block;
            margin: 0px;
        }

        .sideMenuBtn {
            width:30px;
            height: 30px;
            display: inline-block;
            float: right;
            margin-right: 10px;
        }
    `

    return(
        <HeaderStyle>
            <h1 className="title">전자사전</h1>

            <div className="sideMenuBtn" onClick={onSideMenuValue}>
                <hr />
                <hr />
                <hr />
            </div>
        </HeaderStyle>
    )
}

export default Header;
