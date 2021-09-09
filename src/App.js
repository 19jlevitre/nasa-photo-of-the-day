import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './Constants';
import axios from 'axios';
import styled from "styled-components";

const StyledHeader = styled.header`
h1{
  color: grey;
}
nav{
  display: flex;
  justify-content: space-evenly;
  
  a{
    text-decoration: none;
    color: blue;
    font-family: sans-serrif;
  }

}
`

const StyledImg = styled.div`

border: solid 2px purple;
border-radius: 10px;
margin: 5% 30%;
background-color: black;

img {
  height: 40vh;
  margin-bottom: 10%;
}
h2 {
  color: white;
}
`
const StyledFooter = styled.footer`
nav{
  display: flex;
  justify-content: space-evenly;
  
  a{
    text-decoration: none;
    color: blue;
    font-family: sans-serrif;
  }

}
`

function App() {
  const [picOfTheDay, setPicOfTheDay] = useState({});
  
  useEffect(() => {
   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
      setPicOfTheDay(res.data);
      // console.log(picOfTheDay);
    }).catch(err => console.error(err));
  }, [])
    
  const Pic = props => (
   <StyledImg className="picture">
    <h2>Your NASA photo of the day!:  "{props.pic.title}" </h2>
    <img 
    className='image-of-the-day'
    alt='NASA img of the day'
    src={props.pic.url}/> 
    
    </StyledImg>
  )
  
  
  
  
  
  return (
    <div className="App">
      <StyledHeader><h1> THE APOD SITE </h1>
      <nav>
        <a href= ''>Space</a>
        <a href= ''>The Final</a>
        <a href= ''>Frontier</a>
        <a href= ''>Red Shirt</a>
      </nav>
      </StyledHeader>
      <div className="Content">
       {picOfTheDay.length === 0 && <p>LOADING</p>}
       <Pic pic={picOfTheDay}/>
       <Pic pic={picOfTheDay}/>
       
       
       

      </div>
      <StyledFooter>
        <h2>The End</h2>
        <nav>
        <a href= ''>Space</a>
        <a href= ''>The Final</a>
        <a href= ''>Frontier</a>
        <a href= ''>Red Shirt</a>
      </nav>
      </StyledFooter>
    </div>
  );
}

export default App;
