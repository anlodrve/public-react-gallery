
SET UP 
[] put photos in photo in public/images
[x] modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images
[x] import useState and useEffect
[x] import axios

COMPONENTS
[x] App
[x] GalleyList
[x] Gallery Item 




[x] Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
[x] Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    x Iterate (loop over) the list of gallery data
    x Make GalleryItems
x Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
    x Update the `GalleryList` to use this component to display an image.
    - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked.