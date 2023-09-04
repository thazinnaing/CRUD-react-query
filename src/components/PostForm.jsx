import { useState } from "react";


const initialState= {
    title: "",
    body: ""
}
const PostForm=()=>{

    const [post, setPost]=useState(initialState);

    const handleChangedInput=(e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        }
        )
    }

    const renderField=(label)=>{
        return(
            <div>
            <label htmlFor={label}>{`${label} : `}</label>
            <input id={label} onChange={handleChangedInput} type="text" name={label?.toLowerCase()} value={post?.label?.toLowerCase()} />
        </div>
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("post to add", post);
        setPost(initialState);
    }
    
    return(
        <div>
            <form>
                {renderField('Title')}
                {renderField('Body')}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>

        
    )
}

export default PostForm;