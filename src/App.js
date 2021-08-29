
import './App.css';
import React ,{useState, useEffect} from 'react';
import Routers from './routes';
import { useStore } from 'react-redux';
const  App=()=> {
  const [product , setProduct ] =  useState([])
  useEffect(()=>{
    fetch("http://duanpoly.ml/laravel/public/api/v1/posts/3")
    .then(resprosvie => resprosvie.json())
    .then(data =>{
      console.log("ở đay", data.data  );
    })
  },[])
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
