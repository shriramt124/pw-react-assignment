import React from 'react'

const Header = (props) => {
  return (
    <div  style={{width:'100%',padding:'15px' ,backgroundColor:'royalblue',fontSize:'22px',textAlign:'center'}}>
         {props.title} 
    </div>
  )
}

export default Header