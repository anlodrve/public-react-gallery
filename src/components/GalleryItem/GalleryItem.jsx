import './GalleryItem.css';
import axios from 'axios';
import { useState } from 'react';

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
    // const showText = () => {
    //     if(isClicked == true){
    //         return(
    //             <div className="photoContainer"> 
    //             <div className="internalContainer">
    //                 <img onClick={handleClick()} className="image" src={galleryItem.path}/>
    //                 <div className='likesContainer'>
    //                     <button className='likeButton' value={galleryItem.id} onClick={(e) => likeItem(e)}>💖</button>
    //                     <p className='numberOfLikes'>{galleryItem.likes} likes</p>
    //                 </div>
    //             </div>
    //         </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div className="photoContainer"> 
    //             <div className="internalContainer">
    //                 <div>{galleryItem.description}</div>
    //                 <div className='likesContainer'>
    //                     <button className='likeButton' value={galleryItem.id} onClick={(e) => likeItem(e)}>💖</button>
    //                     <p className='numberOfLikes'>{galleryItem.likes} likes</p>
    //                 </div>
    //             </div>
    //         </div>      
    //         )
    //     }
    //  }

    return(
        <div className="outerContainer"> 
            <div className="internalContainer">
                <div className='imageContainer' onClick={handleClick}>
                {isClicked ? <div>{galleryItem.description}</div> :  <img src={galleryItem.path}/>}
                </div>
                <div className='likesContainer'>
                    <button className='likeButton' value={galleryItem.id} onClick={(e) => likeItem(e)}>💖</button>
                    <p className='numberOfLikes'>{galleryItem.likes} likes</p>
                </div>
            </div>
        </div>

    )
}

export default GalleryItem; 
