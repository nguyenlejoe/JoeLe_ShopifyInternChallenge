import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { GoTriangleUp } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';

const Container = styled.div`
font-size:18px;
font-family: "SF Pro Display";
font-weight:bold;
position:fixed;
left:40px;
top:30px;
z-index: 1;
cursor: pointer;
`

const LanguageCont = styled.div`
display:flex;
align-items:center;
width:100px;
justify-content:space-around;
`

const ArrowCont = styled.div`
display:flex;
align-items:center;
${props => props.active === true && css`
display:none;
`}
`

const LanguageSelect = styled.div`
display:flex;
margin-top:20px;
flex-direction:column;
background: #FFFFFF;
box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
border-radius: 8px;
padding:25px;
margin-bottom:2%;
width:130px;
height:350px;
align-items:center;


${props => props.active === true && css`
display:none;
`}
`

const Selection = styled.div`
font-size:18px;
font-family: "SF Pro Display";
font-weight:bold;
width:100%;
display:flex;
padding-left:10%;


&:hover{
    border-left:4px solid #007F5F;
}

p:hover{
    cursor: pointer;
    opacity: 0.7;
}



${props => props.active === true && css`
border-left:4px solid #007F5F;
`}
`

const DropDown = ({handleLanguage, language}) => {
    const [boxState, setState] = useState(true)
    
    return (
        <Container>
            <LanguageCont onClick={()=>{
                if(boxState){
                    setState(false)
                }else{
                    setState(true)
                }
            }}>
                {language} 
                <ArrowCont active={!boxState}><GoTriangleUp/></ArrowCont>
                <ArrowCont active={boxState}><GoTriangleDown/></ArrowCont>
                
            </LanguageCont>
            
                
            <LanguageSelect active={boxState}>
                <Selection onClick={()=>{
                    handleLanguage("English")
                    setState(true)
                }}><p>English</p></Selection>
                <Selection onClick={()=>{
                    handleLanguage("French")
                    setState(true)
                }}><p>Français</p></Selection>
                <Selection onClick={()=>{
                    handleLanguage("Mandarin Chinese")
                    setState(true)
                }}><p>普通话</p></Selection>
                <Selection onClick={()=>{
                    handleLanguage("Hindi")
                    setState(true)
                }}><p>हिंदी</p></Selection>
                <Selection onClick={()=>{
                    handleLanguage("Spanish")
                    setState(true)
                }}><p>Español</p></Selection>
                <Selection onClick={()=>{
                    handleLanguage("Russian")
                    setState(true)
                }}><p>Pусский</p></Selection>
            </LanguageSelect>
        </Container>
    )
}

export default DropDown;
