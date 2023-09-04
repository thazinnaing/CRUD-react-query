import axios from "axios"

const baseURL="http://localhost:3000/posts"

export const fetchPosts=async()=>{
    const response = await axios.get(baseURL);
    console.log("response data", response.data);
    return response.data; 
}

export const fetchPost=async(id)=>{
    const response = await axios.get(`${baseURL}/${id}`);
    console.log("response data", response.data)
     return response.data;
}

export const addPost=async(addPostData)=>{
    console.log("add data", addPostData)
    const response = await axios.post(baseURL, addPostData);
    console.log("response addpost data", response.data);
}

export const updatePost=async(updateData)=>{
    const id= updateData.id;
    console.log("updateddata", updateData);
    console.log("id", id)
    const response = await axios.put(`${baseURL}/${id}`, updateData);
    console.log("response update data", response.data);
}

