import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './Constants';
import axios from 'axios';


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
   <div className="picture">
    <h2>Your NASA photo of the day!: {props.pic.title} </h2>
    <img 
    className='image-of-the-day'
    alt='NASA img of the day'
    src={props.pic.url}/> 
    
    </div>
  )
  
  
  
  
  
  return (
    <div className="App">
      <header><h1> THE APOD SITE </h1></header>
      <div className="Content">
       {picOfTheDay.length === 0 && <p>LOADING</p>}
       <Pic pic={picOfTheDay}/>
       
       
       

      </div>
    </div>
  );
}

export default App;
