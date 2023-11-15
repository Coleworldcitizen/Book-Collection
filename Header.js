import React, {useState, useEffect} from "react"
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiFillBook} from "react-icons/ai";



const Header = ({categories, filterItems})=> {
  const [button, setButton] = useState(true)
  const [windowWidth, setWindow] = useState(window.innerWidth)




  



  function toggleMenu (){
    return setButton(prevState => !prevState)
  }



useEffect(()=>{

  window.addEventListener('resize', function(){

    setWindow(window.innerWidth)
  })



}, [])






  

return (
  <div className="wrapper">
<h2 className="title"><AiFillBook className="book-icon"/> Book Collection</h2>
  
    {windowWidth< 576  &&  button && <AiOutlineMenu className="menu-icon" onClick={toggleMenu}/>}
    {windowWidth< 576  && !button && <AiOutlineClose className="menu-icon red" onClick={toggleMenu}/>} 

{ windowWidth>576 || !button &&

<div className='half-width'>
  <ul className="unordered">
  {categories.map((category,index)=> {
return  <li  key={index} className='sub-list' onClick={()=> filterItems(category)}>{category}</li>
})}
  </ul>
</div>


}
{ windowWidth>576 &&

<div className="full-width">
<ul className="ordered">
{categories.map((category,index)=> {
return  <li type='list' key={index} className='sub-list' onClick={()=> filterItems(category)}>{category}</li>
})}
  
    </ul>

      </div>
}
    

    





  </div>

)





}


export default Header;