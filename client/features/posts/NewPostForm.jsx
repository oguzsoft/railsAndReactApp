import React, {useEffect, useState} from "react";
import { API_URL } from "../../src/constants";
import { json, useNavigate } from "react-router-dom";

function NewPostForm(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const postData = {title, body};

        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json", 
            },
            body: JSON.stringify(postData)
        });

        if(response.ok){
            const {id} = await response.json();
            navigate(`/posts/${id}`);
        }else{
            console.log("An error occured");
        }
    }

    return(
        <div>
            <h1>New Post Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                   <label htmlFor="titleInput">Title</label>
                    <input type="text" id="titleInput" value={title} onChange={e=>setTitle(e.target.value)} /> 
                </div>
                <div>
                    <label htmlFor="bodyInput">Body</label>
                    <textarea type="text" id="bodyInput" value={body} onChange={e=>setBody(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm;