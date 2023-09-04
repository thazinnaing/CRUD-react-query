import AddPost from "../components/AddPost";
import { fetchPosts } from "../api/postsFromApi";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { deletePost } from "../api/postsFromApi";

const PostLists = () => {
    const navigate=useNavigate();
    const queryClient=useQueryClient();

    const {
        data: posts,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    const deletePostMutation=useMutation({
        mutationFn: deletePost,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ["posts"]});
            console.log("delete success");
        }
    })

    const handleDelete=(id)=>{
        deletePostMutation.mutate(id)
    }

    if (isLoading) return <h1>Loading......</h1>;
    if (isError) return <h1>Error: {error}</h1>;

    console.log("posts list data", posts)

    const postsContent = posts?.map((post) => {
        return (
        <div key={post?.id}>
            <h3 onClick={()=>navigate(`post/${post?.id}`)}>{post?.title}</h3>
            <p onClick={()=>navigate(`post/${post?.id}`)}>{post?.body}</p>
            <button onClick={()=>navigate(`post/${post?.id}/edit`)}>Edit</button>
            <button onClick={()=>handleDelete(post?.id)}>Delete</button>
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
