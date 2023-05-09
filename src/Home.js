import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
const[title, setTitle] = useState("");
const[date, setDate] = useState(null);
const[explanation, setExplanantion] = useState("");
const[img, setImg] = useState("")
const url = "https://api.nasa.gov/planetary/apod?api_key=YSKlW1unEO1qaFQ4eXctjAVD9jjxpgYuIwhPTvmf";

const getresult = async () =>  {
  const result = await axios.get(url);
  setDate(result.data.date);
  setTitle(result.data.title);
  setExplanantion(result.data.explanation);
  setImg(result.data.url);
}

getresult();

  return <div className='container'>
    <div className='date'>
    <h1 style={{marginTop:'-51px'}}>{date}</h1>
    </div>
    <div className='title'>
    <h1 style={{marginTop:'-51px'}}>{title}</h1>
    </div>
    <div className='expl'>
    <h4>{explanation}</h4>
    </div>
    <div className='image'>
    <img src={img} width="1000px" height="1000px" alt="Space"></img>
    </div>
    <div>
      <p  style={{textAlign:'center'}}> <a href={img}>photo/video Link</a>  </p>
    </div>
  </div>;
};

export default Home;