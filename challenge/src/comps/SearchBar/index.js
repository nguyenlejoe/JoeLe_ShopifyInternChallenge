import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const SearchCont = styled.div`
    display:flex;
    flex-direction:column;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:25px;
    margin-bottom:2%;
`;

const SearchLabel = styled.label`
    margin-bottom:10px;
    font-size:18px;
    font-family: "SF Pro Display";
    font-weight:bold;
`;

const SearchInput = styled.input`
    width:95%;
    min-height:25px;
    border-style:none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.10), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-left:15px;
    font-family: "SF Pro Text";

`;

const SearchButton = styled.button`
    width:30px;
    height:30px;
    background-image:url(/search.png);
    border-style:none;
    background-color:white;
    margin:4px 10px 4px 4px;
`;

const SearchBox = styled.div`
    display:flex;
`;

const SearchBar = ({searchMovie,  onClick, language}) => {
    let langaugeMessage;
    
    switch (language) {
        case "French":
            langaugeMessage = {Message: "Titre du film"}
            break;
        case "Mandarin Chinese":
            langaugeMessage = {Message: "电影标题"}
            break;
        case "Hindi":
            langaugeMessage = {Message: "चलचित्र शीर्षक"}
            break;
        case "Spanish":
            langaugeMessage = {Message: "Título de la película"}
            break;
        case "Russian":
            langaugeMessage = {Message: "Название фильма"}
            break;
        default:
            break;
    }
    

    return <SearchCont>
        <IntlProvider messages={langaugeMessage}  defaultLocale="en">
            <SearchLabel>
                <FormattedMessage
                    id="Message"
                    defaultMessage="Movie Title"
                />
            </SearchLabel>
        </IntlProvider>
        
        <SearchBox>
            <SearchButton onClick={onClick}></SearchButton>
            <SearchInput placeholder="Search" onChange={searchMovie}></SearchInput>
        </SearchBox>
    </SearchCont>
}

SearchBar.defaultProps = {

}

export default SearchBar;