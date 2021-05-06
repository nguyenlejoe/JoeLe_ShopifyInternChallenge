import React from 'react';
import styled from 'styled-components';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const ResultCont = styled.div`
    display:flex;
    flex:2;
    max-width:50%;
    min-height:480px;
    flex-direction:column;
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


const Results = ({searchInput, content, language}) => {
    let langaugeMessage;
    switch (language) {
        case "French":
            langaugeMessage = {Message: "Résultats pour"}
            break;
        case "Mandarin Chinese":
            langaugeMessage = {Message: "结果"}
            break;
        case "Hindi":
            langaugeMessage = {Message: "का परिणाम"}
            break;
        case "Spanish":
            langaugeMessage = {Message: "resultados para"}
            break;
        case "Russian":
            langaugeMessage = {Message: "Результаты для"}
            break;
        default:
            break;
    }
    return (   
    <ResultCont>
        <IntlProvider messages={langaugeMessage}  defaultLocale="en">
                <ResultLabel>
                <FormattedMessage
                    id="Message"
                    defaultMessage="Results for"
                />
                {searchInput}
                </ResultLabel>
        </IntlProvider>
        
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