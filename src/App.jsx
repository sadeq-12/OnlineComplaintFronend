

import { Routes, Route} from "react-router-dom"


import Body from "./Pages/Body";

import Sidenav from "./Pages/Sidenav";

import Dashboard from "./Pages/Dashboard";

import ComplaintForm from "./components/ComplaintForm";

import Complaints from "./Pages/Complaints";

import Results from "./Pages/Results"


// import Times from "./Pages/Times"









function App(){

    return <Routes>


        <Route  path="/sidenav" element={<Sidenav/>}  />


     



        <Route  path="/dashboard" element={<Dashboard/>}  />

        <Route  path="/form" element={<ComplaintForm/>}  />


        <Route  path="/complaints" element={<Complaints/>}  />


        <Route  path="/results/:id" element={<Results/>}  />


        {/* <Route  path="/times/:id" element={<Times/>}  /> */}

      

        <Route  path="/" element={<Body/>}  />

 
         

       







    </Routes>




}

export default App