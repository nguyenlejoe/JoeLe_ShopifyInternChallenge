import React from 'react';
import axios from 'axios';

export const searchMovie = async() =>{
    var resp = await axios.get(`http://www.omdbapi.com/apikey.aspx`);
    
} 