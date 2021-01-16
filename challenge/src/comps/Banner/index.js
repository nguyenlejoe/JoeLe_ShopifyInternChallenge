import React from 'react';
import styled, {css} from 'styled-components';

const BannerCont = styled.div`
    width:62%;
    display:flex;
    justify-content:center;
    align-items:center;
    bottom:135px;
    position:relative;
    min-height:80px;
    max-height:80px;
    background-color:#007F5F;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-family: "SF Pro Display";
    font-weight:300;
    font-size:20px;
    color:white;

    ${props => props.active === true && css`
    display:none
    `}

`;



const Banner = ({active}) =>{
    return (
        <BannerCont active={active}>
            You have selected 5 nominations
        </BannerCont>
    );
}

Banner.defaultProps = {

}

export default Banner;