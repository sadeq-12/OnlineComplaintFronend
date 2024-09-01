// import React from "react";

import axios from "axios";

import { useState } from "react";

function ComplaintForm() {




    const[title , setTitle] = useState([])

    const [description, setDescription] = useState([])


    // const [number, setNumber] = useState([])
    
  

  const handleSave = (e) => {
    e.preventDefault() 


    alert("Your complaint has been saved")

    axios.post("http://localhost:5000/create",{
    
    
    "title": title,
    "description": description,

    // 'number': number


 
    }).then(() =>{

         }).catch((err) =>{
             console.log(err)
 })



  };

  const handleClose = () => {
    document.getElementById("complaintForm").style.display = "none";
  };

  return (
    <div id="complaintForm" className="fixed inset-0 flex items-center justify-center top-0  ">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Send to Us Complaint</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Title
            </label>
            <input    value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea   value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Enter description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" > </textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;
