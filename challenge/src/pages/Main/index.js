import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from 'comps/SearchBar';
import Results from 'comps/Results';
import Nomination from 'comps/Nominations';
import MovieCard from 'comps/MovieCard';
import MovieBox from 'comps/MovieBox';
import Banner from 'comps/Banner';


const Main = () => {

    const [movies, setMovie] = useState([]);
    const [movieInput, setMovieInput] = useState("");
    const [Nominate, setNominate] = useState([]);
    const [NominationState, setNominationState] = useState(true);
    
    // Key - b9966b78
    const searchMovie = async(searchText) =>{
        var resp = await axios.get("http://www.omdbapi.com/?s=" + searchText + "&apikey=b9966b78");
        setMovie(...[resp.data.Search]);
        console.log(searchText)
        console.log(movies);

    } 

    const HandleRemove = (name) => {
        setNominate(Nominate.filter(item => item.Title !== name))
    }


    return <div className = "main">
        <h1>The Shoppies</h1>
        <div className = "content">
            <div className = "search"><SearchBar
                searchMovie = {(e)=>{
                    setMovieInput(e.target.value)
                }}
                onClick={()=>{
                    searchMovie(movieInput)
                }}
                />
            </div>
            <div className = "results">
                <Results
                content={ movies && movies.map((o,i)=>{
                    return ( 
                        <MovieCard
                            bgimg={o.Poster}
                            title={o.Title}
                            year={o.Year}
                            pic={o.Poster}
                            nominate={()=>{
                                setNominate([...Nominate, o])
                                if(Nominate.length === 4){
                                    setNominationState(false)
                                }
                            }}
                            button="Nominate"
                        />
                    );
                })}
                />
                <Nomination
                content={Nominate.map((o,i)=>{
                    return (
                        <MovieBox
                            title={o.Title}
                            year={o.Year}
                            nominate={()=>{
                                HandleRemove(o.Title)
                                setNominationState(true)
                            }}
                            button="Remove"
                        />   
                    );
                })}
                />
            </div>
            <Banner active={NominationState}></Banner>   
        </div>
      

    </div>
}

export default Main;