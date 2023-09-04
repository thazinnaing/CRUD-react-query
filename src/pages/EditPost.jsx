import { fetchPost } from "../api/postsFromApi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { updatePost } from "../api/postsFromApi";

const EditPost=()=>{
    const {id}= useParams()
    const navigate=useNavigate()
    const queryClient= useQueryClient()

    const {
        data: post,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["post",id],
        queryFn: ()=>fetchPost(id),
    });

    const updatePostMutation=useMutation({
        mutationFn: updatePost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["posts"]});
            console.log("success update");
            navigate("/")
        }

    })

    if (isLoading) return <h1>Loading......</h1>;
    if (isError) return <h1>Error: {error}</h1>;

    const handleSubmit=(updatedPost)=>{
        updatePostMutation.mutate({id,...updatedPost})
    }
    
    return(
        <div>
            <h1>EditPost</h1>
            <PostForm onSubmit={handleSubmit} initialValue={post}/>
        </div>
        
    )
}

export default EditPost;