import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import Header from '../Header/Header';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  //on load, get items
	useEffect(() => {
		getItems();
	}, []);

  const getItems = () => {
    axios.get("/gallery")
    .then((response) => {
      setGalleryList()
    })
    .catch((err) => {
      alert("Error getting items");
      console.log(err);
    }); 
    
  }


    return (
      <div className="App">
       <Header />
       <GalleryList getItems={getItems} galleryList={galleryList}/> 
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
