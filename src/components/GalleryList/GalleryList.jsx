import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({getItems, galleryList}){
    return (
        <div className="flex-container">
        {galleryList.map((galleryItem) => {
            return <GalleryItem key={galleryItem.id} getItems={getItems} galleryItem={galleryItem}/>
        })}
        </div>
    )
}
export default GalleryList