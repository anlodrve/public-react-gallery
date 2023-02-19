import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';


function GalleryList({getItems, galleryList}){
    return (
        <Box sx={{ width: 800, height: 600, overflowY: 'scroll' }}>
            <Masonry columns={4} spacing={2}>
                {galleryList.map((galleryItem) => {
                return <GalleryItem key={galleryItem.id} getItems={getItems} galleryItem={galleryItem}/>
        })}
         </Masonry>
    </Box>
    )
}
export default GalleryList