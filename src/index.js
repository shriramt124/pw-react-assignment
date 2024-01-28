import React from "react"
import ReactDom from 'react-dom'
import App from "./App"
import Person from "./Component/Person"
import Button from "./Component/Button"
import List from "./Component/List"
import Header from "./Component/Header"
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
 <>
<Header title="this is the sample title"/>
<Person name="shriram tiwari" age="21"/>{/* this is for person */}
 <Button text="submit button" onClick={()=>{alert("i am clicked")}}/>{/* this is for button */}
 <List items ={["banana","apple","mango"]}/>{/* this is for List items */}
 
 </>
)