import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Properties} from "./pages/Properties"
import {PropertiesDetails} from "./pages/PropertiesDetails"

import {SignUp} from "./pages/SignUp"
import {Login} from "./pages/Login"
import {ProductUpload} from "./pages/ProductUpload"




const App = () =>{
  return(
    
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/properties" element={<Properties/>}/>
    <Route path="/properties-detail" element={<PropertiesDetails/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    
    </Routes>
    </Router>
    
   
  )
}

export default App