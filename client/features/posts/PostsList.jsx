import React, {useState, useEffect} from "react"
import { API_URL } from "../../src/constants";
import { Link } from "react-router-dom";
function PostsList(){
    const [Posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadPosts(){
            try {
                const response = await fetch(API_URL);
                if(response.ok){
                    const json = await response.json();
                    setPosts(json);
                }else{
                    throw response;
                }
            } catch (error) {
                setError("An error occured");
                console.log("An error occured", error);
            } finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, []);
    return(
        <div>
        {Posts.map((post) => (
            <div key={post.id} className="post-container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`/posts/${post.id}`}>Show</Link>
            </div>
        ))}       
        </div>
    )
}

export default PostsList; 