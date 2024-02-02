"use client"
import Layout from '@/app/components/Layout'
import React from 'react'
import Link from 'next/link'

export default function AddAdmin() {
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
    <div className="card-content">
        <form>
          <div className="field">
            <label className="label">Full Name</label>
            <div className="control">
              <input className="input" required />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input  className="input" required />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
              <input className="input" required />
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
              <input type="text" className="input" required />
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
