
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'

import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import Sidenav from './Pages/Sidenav.jsx'






createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
     

     {/* <Sidenav/> */}    
    <App/>


    </BrowserRouter>  
    
    



    
  
)
