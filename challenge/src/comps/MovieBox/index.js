import React from 'react';
import styled, {css} from 'styled-components';
import {motion} from "framer-motion";

const MovieCont = styled(motion.div)`
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



const MovieBox = ({title, year, nominate, button, bgimg }) =>{
    
    const variants = {
        hidden:{
            opacity:0,
            y: '-10px'
        },
        visible:{
            opacity:1,
            y: '0',
            duration:1,
            transition: {
                type:"spring",
                stiffness:90,
                mass:0.8,
                damping:10
            }
        },
    }

    return <MovieCont bgimg={bgimg}
    variants={variants}
    initial="hidden"
    animate="visible"
    whileHover={{
        scale:1.1,
        transition:{
            duration:.2
        }
    }}
    >
        <MovieContent>
            <MovieTitle>{title}  ({year}) </MovieTitle>
        </MovieContent>
        <MovieButton onClick={nominate} >{button}</MovieButton>
    </MovieCont>
}

MovieBox.defaultProps = {

}

export default MovieBox;