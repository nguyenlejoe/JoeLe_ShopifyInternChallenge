import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from 'comps/SearchBar';
import Results from 'comps/Results';
import Nomination from 'comps/Nominations';
import MovieCard from 'comps/MovieCard';
import MovieBox from 'comps/MovieBox';
import Banner from 'comps/Banner';


const Main = () => {

    // States for movies, nominations and banner
    const [movies, setMovie] = useState([]);
    const [movieInput, setMovieInput] = useState("");
    const [Nominate, setNominate] = useState([]);
    const [NominationState, setNominationState] = useState(true);

    // Key - b9966b78

    // Handle searching movie using omdb API
    const searchMovie = async(searchText) =>{
        var resp = await axios.get("https://www.omdbapi.com/?s=" + searchText + "&apikey=b9966b78");
        setMovie(...[resp.data.Search]);
        console.log(searchText)
        console.log(movies);
    } 

    // Handle removing nominations from list
    const HandleRemove = (name) => {
        setNominate(Nominate.filter(item => item.Title !== name))
    }

    // Check if there are any saved nominations 
    useEffect(()=>{
        const savedNominations = JSON.parse(localStorage.getItem('nominateSaves'))

        if (savedNominations !== null) {
            setNominate([...savedNominations])
          }
    }, [])

    // Save nominations when one a movie has been added to the nominations list
    useEffect(()=>{
        localStorage.setItem(`nominateSaves`, JSON.stringify(Nominate));
    }, [Nominate])

    return <div className = "main">
        <h1>The Shoppies</h1>
        <div className = "content">
            <div className = "search">
                <SearchBar
                    searchMovie = {(e)=>{setMovieInput(e.target.value)}}
                    onClick={()=>{searchMovie(movieInput)}}
                />
            </div>
            <div className = "results">
                <Results
                    searchInput={movieInput}
                    content={ movies && movies.map((o,i)=>{
                        // Check if the movie has already been nominated 
                        let active = false
                        for(let item of Nominate){
                            if(item.Title === o.Title){
                                active = true;
                            }
                        }
                        return ( 
                            <MovieCard
                                bgimg={o.Poster}
                                title={o.Title}
                                year={o.Year}
                                pic={o.Poster}
                                state={active}
                                nominate={()=>{
                                    // Check if the user has nominated 5 movies
                                    if(Nominate.length <= 4){
                                        setNominate([...Nominate, o])
                                        if(Nominate.length === 4){
                                            setNominationState(false)
                                        }
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
            <div className="banner">
                <Banner active={NominationState}></Banner>
            </div>  
        </div>
      

    </div>
}

export default Main;