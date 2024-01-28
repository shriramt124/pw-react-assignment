 import React from 'react'
 
 const List = (props) => {
   return (
     <div>
        <ul>
            {props.items.map((item)=>{
              return <li>{item}</li>
            })}
        </ul>
    
     </div>
   )
 }
 
 export default List
 