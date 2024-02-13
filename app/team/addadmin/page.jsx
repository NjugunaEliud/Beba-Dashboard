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
  const [cpassword, setCPassword] = useState("");
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    axios.post('https://us-central1-bidleo-398811.cloudfunctions.net/signup_as_user',
      {
        email: email,
        mobile_no: mobile_no,
        name: name,
        utype:utype,
        Password: password,
        cPassword: cpassword,
      }
     )
    .then((response) => {
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
     ;
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
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input 
               className="input"
                required 
                type="text"
                value={mobile_no}
                onChange={e =>setMobileNo(e.target.value)}
                />
            </div>
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
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input 
              type="password" 
              className="input"
               required 
               value={cpassword}
               onChange={e =>setCPassword(e.target.value)}
               />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button 
              type="submit" 
              className="button blue"
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
