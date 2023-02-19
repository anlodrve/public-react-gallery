import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'
import { Box, ImageList } from '@mui/material'

function GalleryList({getItems, galleryList}){
    return (
        <Box sx={{ width: 800, height: 600, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {galleryList.map((galleryItem) => {
                return <GalleryItem key={galleryItem.id} getItems={getItems} galleryItem={galleryItem}/>
        })}
         </ImageList>
    </Box>
    )
}
export default GalleryList