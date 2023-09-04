import axios from "axios"

const baseURL="http://localhost:3000/posts"

export const fetchPosts=async()=>{
    const response = await axios.get(baseURL);
    console.log("response data", response.data)
     return response.data;

}