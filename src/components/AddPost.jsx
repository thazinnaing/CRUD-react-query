import PostForm from "./PostForm";
import { addPost } from "../api/postsFromApi";
import { useMutation } from "react-query";

const AddPost=()=>{

    const addPostMutation=useMutation({
        mutationFn: ()=> addPost(post)
    })

    const handleAddPost=(post)=>{
        addPostMutation.mutate({...post})
    }

    return(
        <div>
            <h2>Add new Post</h2>
            <PostForm onSubmit={handleAddPost} initialValue={{}}/>
        </div>
    )
}

export default AddPost;