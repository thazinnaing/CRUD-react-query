import AddPost from "../components/AddPost";
import { fetchPosts } from "../api/posts";
import { useQuery } from "react-query";
const PostLists=()=>{

    const {data: posts, isError, isLoading, error}= useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    if(isLoading) return <h1>Loading......</h1>;
    if(isError) return <h1>Error: {error}</h1>

    const postsContent= posts?.map((post)=>{
            return(
                    <div key={post?.id}>
                        <h3>{post?.title}</h3>
                        <p>{post?.body}</p>
                    </div>
                )   
    })

    return(
        <div>
            <AddPost />
            {postsContent}
        </div>
        
    )
}

export default PostLists;