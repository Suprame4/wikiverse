import React from 'react';
import {useState, useEffect} from 'react'
import apiURL from '../api';

const Page2 = (props) => {

    //destructure props
    const {title, slug } = props.page

    console.log("TEST title: ", slug)
    const deletePage = async () => {
        const response = await fetch(`${apiURL}/wiki/${slug}`, {
            method: "DELETE",
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>   
            <p>
                {title}   
                    <button onClick={() => {deletePage()}}>
                        DELETE
                    </button>
            </p>
        </div>
    )
}

export default Page2