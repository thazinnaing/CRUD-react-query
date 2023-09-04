import AddPost from "../components/AddPost";
import { fetchPosts } from "../api/postsFromApi";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const PostLists = () => {
    const navigate=useNavigate();

    const {
        data: posts,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    if (isLoading) return <h1>Loading......</h1>;
    if (isError) return <h1>Error: {error}</h1>;

    const postsContent = posts?.map((post) => {
        return (
        <div key={post?.id}>
            <h3 onClick={()=>navigate(`post/${post?.id}`)}>{post?.title}</h3>
            <p onClick={()=>navigate(`post/${post?.id}`)}>{post?.body}</p>
            <button onClick={()=>navigate(`post/${post?.id}/edit`)}>Edit</button>
            <button>Delete</button>
        </div>
        );
    });

    return (
        <div>
        <AddPost />
        {postsContent}
        </div>
    );
    };

    export default PostLists;
