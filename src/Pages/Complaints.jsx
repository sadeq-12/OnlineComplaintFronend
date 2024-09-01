import { useEffect, useState } from "react"

import axios from "axios"
import { Link } from "react-router-dom"

import Sidenav from "../Pages/Sidenav"

function Complaints(){


    const [results, setReselts]= useState([])

    
    const handleGetDate =() =>{
        axios.get("http://localhost:5000/displays").then((response) =>{
            setReselts(response.data)

        }).catch((err) =>{

            
            console.log(err)
        })

        

    }
    useEffect(()=>{
        handleGetDate()
    },[])
    return <div className="flex  gap-10">
        <Sidenav />

    <div className="">


        <h1 className="ml-10">complaints</h1>

        <table className="w-full text-center"> 
            <tr>
            <th>numbers</th>
            <th>Title</th>
            <th>Description</th>
            <th>time</th>
            <th>Action</th>

            </tr>

          {
              
              
              
              results.map(( data) => {
                  
                  return <tr>
                    
                    
                    <td className="border-2 ">{data.number}</td>
                
                    <td className="border-2 ">{data.title}</td>
                    <td className="border-2 ">{data.description}</td>
                    <td className="border-2 ">{data.time}</td>
                    

                    
                    {/* <td className="border-2 ">{data.time}</td> */}


                    <td className="border-2 ">  <Link to={`/results/${data._id}`}>   <button    className="bg-green-500 rounded px-2 py-1 text-white  ">Details</button></Link></td>

            </tr>

})


}
        

        </table>
</div>

    </div>
}

export default Complaints
