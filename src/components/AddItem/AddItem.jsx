import { useState } from "react";
import axios from 'axios';
import { Button } from '@mui/material';
import './AddItem.css';

function AddItem ({getItems}) {
    const [pathInput, setPathInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            path: pathInput, 
            description: descriptionInput,
            likes: 0
        };

        axios.post("/gallery", newItem)
        .then(() => {
            getItems();
            clearInputFields();
        })
    }

    const clearInputFields = () => {
        setPathInput("");
        setDescriptionInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Submit a Photo</h3>
            <input
            	onChange={(e) => setPathInput(e.target.value)}
				type="text"
				value={pathInput}
				placeholder="URL"
			/>
             <input
            	onChange={(e) => setDescriptionInput(e.target.value)}
				type="text"
				value={descriptionInput}
				placeholder="Describe your photo"
			/>
            <Button color="secondary" variant="contained" type="submit">Submit</Button>

        </form>
    )
}

export default AddItem;