import PostForm from "./PostForm";
import { addPost } from "../api/postsFromApi";
import { useMutation, useQueryClient } from "react-query";
import {v4 as uuidv4} from "uuid";

const AddPost=()=>{
    const queryClient=useQueryClient();

    const addPostMutation=useMutation({
        mutationFn: addPost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["posts"]});

        }
    })

    const handleAddPost=(post)=>{
        addPostMutation.mutate({
            id: uuidv4(),
            ...post
        })
    }

    return(
        <div>
            <h2>Add new Post</h2>
            <PostForm onSubmit={handleAddPost} initialValue={{}}/>
        </div>
    )
}

export default AddPost;