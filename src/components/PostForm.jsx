import { useState } from "react";


const PostForm=({onSubmit,initialValue})=>{

    const [post, setPost]=useState({
        title: initialValue?.title || "",
        body: initialValue?.body || ""
    });

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
        onSubmit(post);
        setPost({
            title: "",
            body: ""
        });
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