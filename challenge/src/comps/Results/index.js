import React from 'react';
import styled from 'styled-components';

const ResultCont = styled.div`
    display:flex;
    flex-direction:column;
    min-width:58%;
    max-width:58%;
    min-height:400px;
    max-height:400px;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:25px;
`;

const ResultLabel = styled.label`
    margin-bottom:10px;
    font-size:20px;
    font-family: "SF Pro Display";
    font-weight:bold;
`;

const ResultOutput = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;
const ResultContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-y: hidden;
    overflow-x:auto;
    height:100%;
`;


const Results = ({searchInput, content}) => {
    return (   
    <ResultCont>
        <ResultLabel>Results for {searchInput}</ResultLabel>
        <ResultContent>
            <ResultOutput>{content}</ResultOutput>
        </ResultContent>
    </ResultCont>
    );
}

Results.defaultProps = {
    searchInput: "Movie"
}

export default Results;