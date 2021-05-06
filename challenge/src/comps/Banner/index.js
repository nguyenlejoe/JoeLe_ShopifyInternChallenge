import React from 'react';
import styled, {css} from 'styled-components';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
 

const BannerCont = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:80px;
    max-height:80px;
    background-color:#007F5F;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-family: "SF Pro Display";
    font-weight:300;
    font-size:20px;
    color:white;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;

    ${props => props.active === false && css`
    visibility: visible;
    opacity: 1;
    `}

`;



const Banner = ({active, language}) =>{
    let langaugeMessage;
    
    switch (language) {
        case "French":
            langaugeMessage = {Message: "Vous avez sélectionné 5 nominations"}
            break;
        case "Mandarin Chinese":
            langaugeMessage = {Message: "您选择了5个提名"}
            break;
        case "Hindi":
            langaugeMessage = {Message: "आपने 5 नामांकन चुने हैं"}
            break;
        case "Spanish":
            langaugeMessage = {Message: "Has seleccionado 5 nominaciones"}
            break;
        case "Russian":
            langaugeMessage = {Message: "Вы выбрали 5 номинаций"}
            break;
        default:
            break;
    }
    return (
        <IntlProvider messages={langaugeMessage}  defaultLocale="en">
            <BannerCont active={active}>
            <FormattedMessage
                id="Message"
                defaultMessage="You have selected 5 nominations"
            />
        </BannerCont>
        </IntlProvider>
    );
}

Banner.defaultProps = {

}

export default Banner;