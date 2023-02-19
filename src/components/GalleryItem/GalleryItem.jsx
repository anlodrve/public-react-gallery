import './GalleryItem.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@mui/material';

function GalleryItem({getItems, galleryItem}) {
    
    const likeItem = (e) => {
        const id = e.target.value
        axios.put(`/gallery/like/${id}`)
        .then(() => {
            console.log("in likeItem put request")
            getItems();
        })
        .catch((err) => {
            alert("error liking item", err)
        })
    }

    const [isClicked, setIsClicked] = useState(false)
    console.log(isClicked)

 
    
    const handleClick = () => {
        setIsClicked(!isClicked)

    }

    return(
        <div className="outerContainer"> 
            <div className="internalContainer">
                <div className='imageContainer' onClick={handleClick}>
                {isClicked ? <div>{galleryItem.description}</div> :  <img src={galleryItem.path}/>}
                </div>
                <div className='likesContainer'>
                    <Button className='likeButton' value={galleryItem.id} onClick={(e) => likeItem(e)}>💖</Button>
                    <p className='numberOfLikes'>{galleryItem.likes} likes</p>
                </div>
            </div>
        </div>

    )
}

export default GalleryItem; 
