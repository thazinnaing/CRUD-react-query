import { useState } from "react";

const PostForm=({onSubmit,initialValue})=>{


    const [post, setPost]=useState({
        title: initialValue?.title || "",
        body: initialValue?.body || ""
    });

    const addAvailable= [post?.title, post?.body].every(Boolean);

    const handleChangedInput=(e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        }
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(post);
        setPost({
            title: "",
            body: ""
        });
        
    }
    
    return(
        <div>
            <form>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" required onChange={handleChangedInput} value={post?.title} />
                <br />

                <label htmlFor="body">Description: </label>
                <input type="text" id="body" name="body" required onChange={handleChangedInput} value={post?.body} />
                <br />

                <button disabled={!addAvailable} onClick={handleSubmit}>Submit</button>
            </form>
        </div>

        
    )
}

export default PostForm;