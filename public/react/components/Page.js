import React from 'react';
import {useState, useEffect} from 'react'
import apiURL from '../api';

const Page = (props) => {

  const [article, setArticle] = useState(false)

  const showArticle = article ? `Hide ${props.page.title}` : props.page.title 

  //get name of author and tags 
  const [user, setUser] = useState([])

  /*
    Title
    Author
    Content
    Tags
    Date (createdAt)
  */
  const {title, content, createdAt, authorId} = props.page

    async function fetchUser(){
      try {
        const response = await fetch(`${apiURL}/users/${authorId}`);
        const userData = await response.json();
        console.log("users data: ", userData)
    
        setUser(userData);
      } catch (err) {
        console.log("Oh no an error! ", err)
      }
    }
    const {name} = user

    useEffect(() => {
      fetchUser()
    }, []);

    console.log("users data 2: ", user)
  const extraContent=
    <div>
      <p className="extra-content">
        <b>Author:</b> {name}
      </p>
      <p>
        <b>Published:</b> {new Date(props.page.createdAt).toLocaleDateString()}
      </p>
      <p>
        {props.page.content}
      </p>
      <p>
        <b>Tags:</b> Test
      </p>
    </div>  
  return <>
    <div>
      <a onClick={() => {setArticle(!article)}}><h3>{showArticle}</h3></a>
      {article && extraContent }
    </div>
  </>
} 

export default Page; 