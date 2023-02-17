import GalleryItem from '..Gallery Item/GalleryItem'

function GalleryList({getItems, galleryList}){
    return (
        <>
        {galleryList.map((item) => {
            return <GalleryItem key={item.id} getItems={getItems} galleryItem={galleryIitem}/>
        })}
        </>
    )
}
export default GalleryList