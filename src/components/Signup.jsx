
import React, { useState } from "react";
 import { Link } from "react-router-dom";
 import { TodoCTA } from "./TodoCTA";
 import { useForm } from "react-hook-form";
// import './App.css'

function Signup(onDataSubmit) {
    
 
  const [formData, setFormData] = useState({ name: "", email: "", gender: "", language: "", });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData)=>({
      ...prevFormData,[name]:value
    }));
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", gender: "", Language: "", }); // Reset form
    onDataSubmit(formData)
  };

  return (
    <div className=  "">
      {/* Signup Form */}
      <dialog id="my_modal_3" className="modal container pb-5 px-5 md:px-5 mx-auto mt-15 ">
              <div className="modal-box">
                <form onSubmit={handleSubmit} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById("my_modal_3").close()}
                  >
                    ✕
                  </Link>
             
        <h2 className="text-2xl font-bold mb-4  ">Get Started Today</h2>
        <h5>Fill in Your Form</h5>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
            className=" py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
            className=" py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
           
        </div>
         
         
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <div class="flex items-center mb-4">
    <input id=" checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div class="flex items-center">
    <input   id=" checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Language</label>
 
          <div class="flex items-center mb-4">
    <input id=" checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
</div>
<div class="flex items-center mb-4">
    <input   id=" checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hindi</label>
</div>
      <div class="flex items-center mb-4">
    <input id=" checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marathi</label>
</div>
 
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
<div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" requried/>
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

       
    
      </div>
      </dialog>
       
    </div>
  );
};

 

 


export default Signup
