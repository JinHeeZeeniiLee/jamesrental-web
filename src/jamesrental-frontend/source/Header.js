import React from "react";
import styled from 'styled-components';
import JamesLogoImg from '../../assets/james.png' 



const HeaderStyled = styled.header`
 display: flex;
 justify-content:space-between;
 align-items:center;
 padding: 20px ;
 background-color: #1b1714;
 color: white; 
`

const LogoImage = styled.img`
width: 300px;
height: auto;
`

const Header = () => {
    return(
    <HeaderStyled>
        <LogoImage src={JamesLogoImg} alt='James Logo'/>
        <h1>11</h1>
    </HeaderStyled>
    );
};

export default Header;