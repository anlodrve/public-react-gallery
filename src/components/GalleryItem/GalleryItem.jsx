import './GalleryItem.css';
import axios from 'axios';
import { useState } from 'react';
import { Box, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';

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
        <Box className="outerContainer"> 
                <ImageListItem onClick={handleClick} >
                {isClicked ? <div>{galleryItem.description}</div> 
                :  <img src={`${galleryItem.path}?w=248&fit=crop&auto=format`}
                    srcSet={`${galleryItem.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={galleryItem.description}
                    />}
                 </ImageListItem>
                    <ImageListItemBar 
                        position="below" 
                        actionIcon={
                            <IconButton value={galleryItem.id} onClick={(e) => likeItem(e)}>
                                💖
                            </IconButton>
                        }
                        actionPosition="left"
                        title={`${galleryItem.likes} likes`}
                    />
           
        </Box>

    )
}

export default GalleryItem; 
