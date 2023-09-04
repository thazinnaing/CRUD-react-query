import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/postsFromApi";
import { useQuery } from "react-query";

const Post=()=>{
    const navigate=useNavigate()
    const {id}=useParams();
    const {
        data:post,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["post",id],
        queryFn: ()=>fetchPost(id),
    });

    if (isLoading) return <h1>Loading......</h1>;
    if (isError) return <h1>Error: {error}</h1>;
    
    console.log("data is", post)

    return(
        <div>
            <button onClick={()=>navigate(`/`)}>Back to postLists</button>
            <h3 onClick={()=>navigate(`post/${post?.id}`)}>{post?.title}</h3>
            <p onClick={()=>navigate(`post/${post?.id}`)}>{post?.body}</p>
        </div>
    )
}

export default Post;