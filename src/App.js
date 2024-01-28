import React from "react"
import ReactDom from 'react-dom'
import App from "./App"
import Person from "./Component/Person"
import Button from "./Component/Button"
import HeaderCompo from "./Component/Header"
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
 <>
 <HeaderCompo title="welcome to the world of technology"/>
<Person name="shriram tiwari" age="21"/>
 <Button text="submit button" event ="onClick"/>
 </>
)