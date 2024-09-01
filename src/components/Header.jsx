import { Link } from "react-router-dom"




 


function Header(){

    return <div className="">

      



      
        
        <div className="flex justify-between bg-blue-500  px-2 py-2">
            
     
     <h1 className="pl-10 text-3xl"><span className="text-yellow-500">Dayniile</span><span className="text-white">Court</span> </h1>

     <ul className="flex  mr-[10%] gap-7 pt-2 text-white ">
        <li>Home</li>
        <li>About</li>


     </ul>
     
     <Link to= "/sidenav" > <button   className="text-white bg-orange-400 rounded mr-10 p-2">Admin area</button> </Link>


     </div>


   


    </div>
   


}

export default Header