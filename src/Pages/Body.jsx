


import Header from "../components/Header"
import ComplaintForm from "../components/ComplaintForm"

import { useState } from "react"





function Body(){  

    const [isOpen , setOpen]= useState(false)
    const HandleOpenBtn =()=>{
        setOpen(true)
    }

    return <div>

    

      
  <Header/>
    
    <div className="bg-orange-700 h-[500px] mt-5">

       <h1 className="text-white ml-[20%] pt-[100px] text-5xl">Make your complaints way easier ever</h1>
       <p className="ml-[27%] pt-5 text-white">We are committed to solve your complaints. Make any complaints you could have.</p>

 <button onClick={HandleOpenBtn} className="bg-orange-400 rounded py-2 px-2 text-white ml-[45%] mt-5 text-2xl">Make Complaint</button> 
 {
  isOpen == true ?   <ComplaintForm/> : ""

 }

     

    </div>
    </div>
}

export default Body 