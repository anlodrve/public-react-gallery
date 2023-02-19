import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import AddItem from '../AddItem/AddItem';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  //on load, get items
	useEffect(() => {
		getItems();
	}, []);

  const getItems = () => {
    axios.get("/gallery")
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((err) => {
      alert("Error getting items");
      console.log(err);
    }); 
    
  }


    return (
      <div className="App">
       <Header />
       <AddItem getItems={getItems} />
       <GalleryList getItems={getItems} galleryList={galleryList}/> 
      </div>
    );
}

export default App;
