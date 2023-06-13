import React from 'react'
import Section from './Section'
import SearchForm from './SearchForm'


const Navbar = () => {
  return (
      <>
    <div className="header">
    <div className="logo"><h1>Van<span>Gogh</span></h1></div> 
    <div className="navbar">
      <a to="./Details.js">HOME</a>
      <a to="#">BLOG</a>
      <a to="#">CONTACT</a>
    </div>
   </div>
       <>
       <Section/>
       <SearchForm/>
     </> 
     
      </>
  )
}

export default Navbar
