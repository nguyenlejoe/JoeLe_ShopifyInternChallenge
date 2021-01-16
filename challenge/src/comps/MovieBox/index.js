import React from 'react';
import styled from 'styled-components';

const MovieCont = styled.div`
    min-width:320px;
    min-height:50px;
    max-width:320px;
    max-height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    margin:10px;
    background: #F0F0F0;
    box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.20);
    border-radius: 8px;
    padding:15px;
    

`;

const MovieTitle = styled.label`
    font-family: "SF Pro Display";
    font-weight:bold;
    margin:5px;
`;

const MovieYear = styled.p`
    font-family: "SF Pro Text";
    margin:5px;
`;

const MovieContent = styled.div`
    display:flex;
`;

const MovieButton = styled.button`
    width: 88px;
    height: 38px;
    border-radius: 5px;
    position:relative;
    right:0px;
    border-style:none;
    background-color:#007F5F;
    color:white;
    font-family: "SF Pro Text";
`;



const MovieBox = ({title, year, nominate, button, state, pic, bgimg }) =>{
    return <MovieCont bgimg={bgimg}>
        <MovieContent>
            <MovieTitle>{title}  ({year}) </MovieTitle>
        </MovieContent>
        <MovieButton onClick={nominate} disabled={state}>{button}</MovieButton>
    </MovieCont>
}

MovieBox.defaultProps = {

}

export default MovieBox;