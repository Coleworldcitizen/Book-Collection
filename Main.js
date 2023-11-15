import React from 'react'
import {AiFillStar} from "react-icons/ai";



export default function Main({image, category, title, author,id}) {

if(id){

}





  return (
    <div className='article-wrapper'>
      <article>
        <div className='img-container'>
        <img src={image} alt={title} className='image' />

        </div>
       
        <div className='info-container'>
        <h3 className='title'>{title}</h3>
        <h2 className='Author'>{author}</h2>
        <p className='stars-container'><span className='stars'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span></p>
        </div>
        
      </article>
    </div>
  )
}
