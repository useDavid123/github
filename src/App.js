import React from 'react'
import Login from './pages/Login'
import Result from './pages/Result'
import {  Route  , Routes , useNavigate}  from "react-router-dom"

const App = () => {
  return (
  
     <Routes>
         <Route path='/' exact element={<Result />} />
        

         <Route path='/auth' element={<Login />} />

     </Routes >
    
    
  )
}

export default App