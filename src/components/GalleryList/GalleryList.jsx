import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({getItems, galleryList}){
    return (
        <>
        {galleryList.map((galleryItem) => {
            return <GalleryItem key={galleryItem.id} getItems={getItems} galleryItem={galleryItem}/>
        })}
        </>
    )
}
export default GalleryList