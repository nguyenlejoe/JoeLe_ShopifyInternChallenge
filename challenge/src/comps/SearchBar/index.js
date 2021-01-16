import React, {useState} from 'react';
import styled from 'styled-components';

const SearchCont = styled.div`
    display:flex;
    flex-direction:column;
    width:97.5%;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:25px;
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

const SearchBar = ({searchMovie,  onClick}) => {

    return <SearchCont>
        <SearchLabel>Movie Title</SearchLabel>
        <SearchBox>
            <SearchButton onClick={onClick}></SearchButton>
            <SearchInput placeholder="Search" onChange={searchMovie}></SearchInput>
        </SearchBox>
    </SearchCont>
}

SearchBar.defaultProps = {

}

export default SearchBar;