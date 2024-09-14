import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const BASE_URL = 'http://localhost:3005'

function App() {

  const getAllUsers = async()=>{
     const response = await axios.get(BASE_URL + '/users') // Ben seni istedim sen gelince diğer kodları çalıştıracağım dedik
     console.log(response.data)
  }
  // const getUserById = async(userid) =>{
  //   const response = await axios.get(BASE_URL + '/users/'+userid);
  //   console.log(response.data)
  // }


  const createUser = async(newUser)=>{
    // Post Veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`,newUser);
    console.log("response",response.data)
  }
  const updateUser = async(userId,updatedUser)=>{
  // Put Veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`,updatedUser);
  }
  const deleteUser = async(userId) =>{
    // Delete veri silmek için kullanılır
    
    const deleted = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deleted);
  }


















  const getUserById = async(userid)=>{
  
    const response = await axios.get(`${BASE_URL}/users/${userid}`);    return response.data.postId;
  }
  const getPostById = async(postid)=>{
    
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts/"+postid);
    return response.data;
  }

  const getPost = async()=>{
    const postId =  await getUserById(1);
    const data = await getPostById(postId);
    console.log(data)
  }

  useEffect(() =>{
    getPost();
    // getAllUsers()
    // getUserById(1)
    // const newUser={
    //   "username":"ahmet",
    //   "password":"1234",
    // }
    // createUser(newUser)

    // updateUser(1,{
    //   "username":"Mavi",
    //   "password":"5660",})
    // deleteUser("8569");

  },[])

  return (
    <>

    </>
  )
}

export default App
