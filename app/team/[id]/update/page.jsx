"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Layout from '@/app/components/Layout';
async function getAdmin(id){
  const res = await axios.get('https://us-central1-bidleo-398811.cloudfunctions.net/signup_as_user/' + id ,{
    next:{
      revalidate : 60 * 60 * 24
    }
  })
  return res.data;
  }
export default async  function Update({params}) {
    const admin = await getAdmin(params.id)  
    // const [name ,setName] = useState();
    // const [email ,seEmail] = useState();


  return (
    <Layout>
    <div className="card-content">
    <p className='uppercase mb-3 text-violet-700'>Update Administrator {admin.id}</p>
    <form key={admin.id} className=' shadow shadow-violet-400 py-3 px-12'>
      <div className="field">
        <label className="label">Full Name</label>
        <div className="control">
          <input
           className="input "
            required 
            value={admin.name}
            onChange={e=>(e.target.value)}
            />
        </div>
      </div>
      <div className="field">
        <label className="label">Phone Number</label>
        <div className="control">
          <input  className="input" required  value={admin.phone}/>
        </div>
      </div>
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input className="input" value={admin.email} required />
        </div>
      </div>
      <div className="field">
        <label className="label">Roles</label>
        <div className="control">
         <select className="input">
            <option value="admin">Admin</option>
            <option value="auctioneer">Auctioneer</option>
         </select>
        </div>
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input type="text" className="input" value={admin.username} required />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input type="password" className="input" required />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button green">
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
  </Layout>
  )
}
