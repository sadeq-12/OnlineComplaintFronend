
import { NavLink } from "react-router-dom"
import Dashboard from "./Dashboard"
import Complaints from "./Complaints"


function Sidenav(){

    return <div className="bg-blue-800 h-screen w-[20%]  text-white ">


        {/* <Dashboard/> */}

        {/* <Complaints/> */}

        
<h1 className=" pl-10 pt-10 text-3xl border-b-2">Dayniile Court</h1>


        <ul className=" mt-10  flex flex-col gap-10 ml-10 text-2xl"> 

        <NavLink to="/dashboard" >  <li > <i class="fa-brands fa-microsoft mr-3"></i>Dashboard</li></NavLink>
          
        <NavLink to="/complaints">  <li><i class="fa-solid fa-square-poll-vertical mr-3"></i>Complaints</li> </NavLink> 
          
            <li><i class="fa-solid fa-right-from-bracket  mr-3"></i>logout</li>  
        </ul>

    </div>

}

export default Sidenav