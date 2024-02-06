"use client"
import Layout from '@/app/components/Layout'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';

export default function AddAdmin() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [utype, setUtype] = useState('admin');
  const [mobile_no, setMobileNo] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    validateForm();
  },[email ,password]);

  const validateForm =() =>{
    let errors = {}; 

  if (!name) { 
      errors.name = 'Name is required.'; 
  } 
  if (!mobile_no) { 
    errors.mobile_no = 'Mobile Number is required.'; 
 } 
 if (!utype) { 
  errors.utype = 'User Type is required.'; 
} 
  if (!email) { 
      errors.email = 'Email is required.'; 
  } 

  if (!password) { 
      errors.password = 'Password is required.'; 
  } else if (password.length < 8) { 
      errors.password = 'Password must be at least 8 characters.'; 
  } 

  setErrors(errors); 
  setIsFormValid(Object.keys(errors).length === 0); 
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
   
    if(isFormValid){
    setLoading(true);
    const newUser = {email,utype,mobile_no ,name ,password}
    try{
    const response = await axios.post('https://us-central1-bidleo-398811.cloudfunctions.net/signup_as_user', newUser ,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 201) {
      // setSuccessMessage('Admin created successfully');
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: " Admin Created Successfully",
        text: "Admin Added",
    })
      setTimeout(() => {
            setSuccessMessage('');
       
            router.push('/team');
          }, 3000);
    }
  }

catch(error){
console.error('Error creating user:', error)
setLoading(false);
}
}
  else{
    console.log('Form has errors. Please correct them.'); 
    setLoading(false);
  }

}
  return (
    <Layout>
    <main>
    <div className="flex justify-between">
    <p className=' text-violet-600 uppercase'>New Aministrator</p>
    <div className="flex-row mb-6"> 
    <p className='text-xl  text-violet-700 px-3 py-2 '>Operations</p>
    <span className='flex justify-center hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer'>
      <Link href='/team'>All Administrator</Link>
    </span> 
    </div>
    </div>
    <div className="card-content relative mt-4">
    {successMessage && (
        <div className="success-message-container mt-4">
        <div className="success-message absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow shadow-violet-300 py-3 px-3 rounded-md w-72 h-56 bg-white z-50">
          <div className="flex flex-col  items-center justify-center">
            <CheckCircleIcon className="h-16 w-16 text-violet-500 mr-2 align-center mt-10 " />
            <p className="text-green-700 text-center">{successMessage}</p>
          </div>
        </div>
      </div>          
      )}
      <form onSubmit={handleSubmit} className='shadow px-6 py-3'>
      {/* Display success message */}
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
            
              <input className="input"
              type="email"
               required
               value={email}
               onChange={e =>setEmail(e.target.value)}
               />
            </div>
            {errors.email && <p className='text-red-700 text-sm mt-1'>{errors.email}</p>}
          </div> 
      
          <div className="field">
            <label className="label">User Type</label>
            <select className="input"
                value={utype}
                onChange={e =>setUtype(e.target.value)}
            >
                <option value="admin">admin</option>
                <option value="auctioneer">auctioneer</option>
                <option value="user">user</option>
             </select>
             {errors.utype && <p className='text-red-700 text-sm mt-1'>{errors.utype}</p>}
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input 
               className="input"
                required 
                value={mobile_no}
                onChange={e =>setMobileNo(e.target.value)}
                />
            </div>
            {errors.mobile_no && <p className='text-red-700 text-sm mt-1'>{errors.mobile_no}</p>}
          </div>
         
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
              type="text"
               className="input"
                required 
                value={name}
                onChange={e =>setName(e.target.value)}
                />
            </div>
            {errors.name && <p className='text-red-700 text-sm mt-1'>{errors.name}</p>}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
              type="password" 
              className="input"
               required 
               value={password}
               onChange={e =>setPassword(e.target.value)}
               />
            </div>
            {errors.password && <p className='text-red-700 text-sm mt-1'>{errors.password}</p>}
          </div>
          <div className="field">
            <div className="control">
              <button 
              type="submit" 
              className="button blue"
              // className={`button ${isFormValid ? 'opacity-100' : 'opacity-50'}`}
              disabled={!isFormValid} 
              >
             Create
              </button>
            </div>
          </div>
        </form>
    
      </div>
    </main>
    </Layout>
   
  )
}
