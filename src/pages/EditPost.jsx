import { fetchPost } from "../api/postsFromApi";
import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const EditPost=()=>{
    const {id}= useParams()
    const {
        data: post,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["post",id],
        queryFn: fetchPost(id),
    });

    if (isLoading) return <h1>Loading......</h1>;
    if (isError) return <h1>Error: {error}</h1>;

    const handleSubmit=()=>{

    }
    
    return(
        <div>
            <h1>EditPost</h1>
            <PostForm onSubmit={handleSubmit} initialValue={post}/>
        </div>
        
    )
}

export default EditPost;