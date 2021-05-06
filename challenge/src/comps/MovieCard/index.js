import React from 'react';
import styled, {css} from 'styled-components';
import {motion} from "framer-motion";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const CardCont = styled(motion.div)`
    min-width:220px;
    min-height:320px;
    max-width:250px;
    max-height:250px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-direction:column;
    margin:15px;
    background-image:url(${props => props.bgimg ? props.bgimg : "null"});
    // background: #F0F0F0;
    background-position:center;
    background-size:cover;
    border-radius: 8px;
    padding:15px;
    box-shadow: inset 40px -200px 40px -70px rgb(0,0,0, 0.6);
    color:white;

`;

const CardTitle = styled.label`
    font-family: "SF Pro Display";
    font-weight:bold;
    font-size:18px;
`;

const CardYear = styled.label`
    font-family: "SF Pro Text";
    font-size:16px;
    margin:5px;
`;

const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    margin:10px;
`;

const CardButton = styled.button`
    height: 38px;
    padding:10px;
    border-radius: 5px;
    position:relative;
    right:0px;
    border-style:none;
    background-color:#007F5F;
    color:white;
    font-family: "SF Pro Text";

    ${props => props.active === true && css`
        background-color:#CCCCCC;
    `}
`;


const MovieCard = ({title, year, nominate, button, state, pic, bgimg, language }) =>{
    let langaugeMessage;
    
    switch (language) {
        case "French":
            langaugeMessage = {Message: "Nommer"}
            break;
        case "Mandarin Chinese":
            langaugeMessage = {Message: "提名"}
            break;
        case "Hindi":
            langaugeMessage = {Message: "नामजद"}
            break;
        case "Spanish":
            langaugeMessage = {Message: "ombrar"}
            break;
        case "Russian":
            langaugeMessage = {Message: "назначить"}
            break;
        default:
            break;
    }

    const variants = {
        hidden:{
            opacity:0,
            y: '10px'
        },
        visible:{
            opacity:1,
            y: '0',
            duration:1,
            transition: {
                type:"spring",
                stiffness:90,
                mass:0.8,
                damping:10
            }
        },
    }
    
    return <CardCont 
    bgimg={pic}
    variants={variants}
    initial="hidden"
    animate="visible"
    whileHover={{
        scale:1.1,
        transition:{
            duration:.2
        }
    }}>

        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardYear>{year}</CardYear>
        </CardContent>
        <IntlProvider messages={langaugeMessage}  defaultLocale="en">
            <CardButton onClick={nominate} active={state} disabled={state}>
                <FormattedMessage
                    id="Message"
                    defaultMessage="Nominate"
                />
            </CardButton>
        </IntlProvider>
        
    </CardCont>
}

MovieCard.defaultProps = {

}

export default MovieCard;