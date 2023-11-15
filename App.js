
import React, { useState } from 'react'
import Header from "./Header"
import Main from "./Main"
import data from "./data"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";






const allCategories =  ["all", ...new Set (data.map((cat)=> 
cat.category
))]

function App() {


const [books, setInfo] = useState(data);
const [categories, setCategories] = useState(allCategories);




const filterItems = (category) => {

  if(category === "all"){
    setInfo(data)
    return;
  }

  const newItems = data.filter((book) => book.category === category)
  setInfo(newItems);
}






let randomNumber = Math.floor(Math.random()* books.length -1)
let array = books[randomNumber]

const Article = 
  
  books.map((book) => {
    return <Main {...book} key={book.id}/>
  })






  return (
    <div className='father'>
    <Header  categories={categories} filterItems={filterItems}/>
    <section>
     {Article}
    </section>
   <footer>
    <div className='footer-container'>
    <p className='para-1'>Collection Compiled by Prince Magomo</p>
<p className='para-2'>Follow me on all social media platforms and i would love to know which book had the most impact in your life.</p>
<div  className='icons-container'>
<FaInstagram className='follow-icons'  />
<FaTwitter   className='follow-icons' />
<FaFacebook  className='follow-icons' />
</div>

    </div>

   </footer>
    </div>
  )
 



}

export default App
