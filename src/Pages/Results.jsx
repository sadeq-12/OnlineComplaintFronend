import axios from "axios"
import { useState } from "react"

import { useParams } from "react-router-dom"

import { useEffect } from "react"

  
  
  
  function Results(){

     
  

    
    const [number, setNumber] = useState([])
    
    const[title , setTitle] = useState([])

    const [description, setDescription] = useState([])

    const [time, setTime] = useState([])




    const prams = useParams()

    

   const getSingleData = ()=> {

    axios.get(`http://localhost:5000/results/single/${prams.id}`).then((response)=>{

     
    // setNumber(response.data.number);
    setTitle(response.data.title);
    setDescription(response.data.description);
    // setTime(response.data.time) 
    
  
  



    }).catch ((err) =>{

    console.log(err)

    })

  }

    useEffect(()=>{ 
       getSingleData()

    },[])


    

    const deleteReselt = (id) =>{

        alert("reselt has been deleted")



        axios.delete(`http://localhost:5000/displays/delete/:id/${id}`).then(() => {
    }).catch((error) =>{
        // alert.error("reselt has been deleted")

        console.log(error)
    })

}

    return <div>
       <h1  onClick={ ()=> deleteReselt (_id)}> <button className="bg-red-500 rounded px-2 py-1 text-white">Delete</button></h1>

       

      <div>

         <h2>Title: {title}</h2>
         <p>Description: {description}</p>
        

         
       
 
      

      
      </div>

         
    </div>


  }

  export default Results