import React, { useEffect, useState } from 'react';
import { GoArrowRight } from "react-icons/go";

import './post-view.css'
import Comment from './Comment.js';
import LikesUnlikes from "./Comment.js"


const PostView = () => {

    const logout =()=>{
        localStorage.clear();
        window.location.href = "/signin";
    }

    return ( 
        <div className='cointner'>
            <div className='nav'>
               <div className='nav1'> <input type="text" placeholder='10x accademy' /></div>
            </div>
            <div className='section'>
            <div className='col1'>
               <b> <p>Publish content</p></b>
                <p>Comments</p>
                <p>History</p>

                <div >
                 <button className='logout' onClick={logout}>Logout</button>
                 

                </div>
            </div>
            <div className='col2'>
                <img className='logo' src='data:image/png;base64,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' alt='logo' ></img>
               <b><p> What is Lorem ipsum</p></b>
               <p>Lorem ipsum is a placeholder text commonly used to
                 demonstrate the visual form of a document or a typeface
                  </p>
            
            <div className='comment'>
             <div className='cmt'><Comment/></div>
            </div>
            </div>
            </div>
        </div>
      
    )
}
export default PostView;