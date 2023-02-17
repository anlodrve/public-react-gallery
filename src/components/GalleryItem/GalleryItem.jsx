import './GalleryItem.css'

function GalleryItem({getItems, galleryItem}) {
    
    const likeItem(e) => {
        const id = e.target.value
    }
    
    return(
        <div> 
            <img className="image" src={galleryItem.path}/>
            <button>💖</button>
        </div>

    )
}

export default GalleryItem; 