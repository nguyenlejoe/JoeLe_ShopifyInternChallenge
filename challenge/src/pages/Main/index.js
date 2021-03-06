import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from 'comps/SearchBar';
import Results from 'comps/Results';
import Nomination from 'comps/Nominations';
import MovieCard from 'comps/MovieCard';
import MovieBox from 'comps/MovieBox';
import Banner from 'comps/Banner';
import DropDown from 'comps/DropDown';



const Main = () => {

    // States for movies, nominations and banner
    const [movies, setMovie] = useState([]);
    const [movieInput, setMovieInput] = useState("");
    const [Nominate, setNominate] = useState([]);
    const [NominationState, setNominationState] = useState(true);
    const [language, setLanguage] = useState("English")

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

        if (savedNominations !== null && savedNominations.length === 5) {
            setNominate([...savedNominations])
            setNominationState(false)
        }
          
    }, [])

    // Save nominations when one a movie has been added to the nominations list
    useEffect(()=>{
        localStorage.setItem(`nominateSaves`, JSON.stringify(Nominate));
    }, [Nominate])

    return <div className = "main">
        <DropDown handleLanguage={(language)=>setLanguage(language)} language={language}/>
        <div className="header">
            <img src="shopifyLogo.png"/>
            <h1>The Shoppies</h1>
        </div>
        <div className = "content">
            <div className = "search">
                <SearchBar
                    language={language}
                    searchMovie = {(e)=>{setMovieInput(e.target.value)}}
                    onClick={()=>{searchMovie(movieInput)}}
                />
            </div>
            <div className = "results">
                <Results
                    language={language}
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
                                language={language}
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
                    language={language}
                    content={Nominate.map((o,i)=>{
                        return (
                            <MovieBox
                                language={language}
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
                <Banner language={language} active={NominationState}></Banner>
            </div>  
        </div>
      

    </div>
}

export default Main;