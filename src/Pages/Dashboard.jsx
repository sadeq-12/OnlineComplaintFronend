import axios from "axios"
import { useState } from "react"
import Sidenav from "./Sidenav"



function Dashboard(){

  
    const [results , setReselts] = useState([])
    
    
    

    // funtion  api soo bandhogato 

    const handleGetDate =() =>{

        axios.get("http://localhost:5000/displays").then((response) =>{
            setReselts(response.data)

        }).catch((err) =>{

            
            console.log(err)
        })

        

    }





    return <div  className=" flex  gap-5 mt-10  ">
        <Sidenav/>

        <div>


        
            <h2    onClick={handleGetDate} className="absolute  mt-[100px] ">Total Complaints</h2>

        <div className="bg-yellow-200 w-[300px] h-[200px] border-4 border-b-blue-500"> </div>

        </div>

        <div className="bg-yellow-200 w-[300px] h-[200px] border-4 border-b-orange-500"> </div> 

        <div className="bg-yellow-200 w-[300px] h-[200px] border-4 border-b-green-500"> </div>


    </div>
}

export default Dashboard