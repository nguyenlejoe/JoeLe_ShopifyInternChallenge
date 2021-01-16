import React from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    min-width:180px;
    min-height:250px;
    max-width:200px;
    max-height:250px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    margin:10px;
    background: #F0F0F0;
    box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.20);
    border-radius: 8px;
    padding:15px;

`;

const CardTitle = styled.label`
    font-family: "SF Pro Display";
    font-weight:bold;
    margin:5px;
`;

const CardYear = styled.label`
    font-family: "SF Pro Text";
    margin:5px;
`;

const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
`;

const CardButton = styled.button`
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

const CardImg = styled.img`
    width:120px;
    height:120px;
    background-size:cover;
    border-radius:100px;
    object-fit: cover;
`;

const MovieCard = ({title, year, nominate, button, state, pic, bgimg }) =>{
    
    return <CardCont bgimg={bgimg}>
        <CardImg src={pic}></CardImg>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardYear>{year}</CardYear>
        </CardContent>
        <CardButton onClick={nominate} disabled={state}>{button}</CardButton>
    </CardCont>
}

MovieCard.defaultProps = {

}

export default MovieCard;