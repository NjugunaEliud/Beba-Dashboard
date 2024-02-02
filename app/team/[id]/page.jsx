import React from 'react'
import axios from 'axios'
import Layout from '@/app/components/Layout';
import Link from 'next/link';

async function getAdmin(id){
  const res = await axios.get('http://localhost:4000/user/' + id ,{
    next:{
      revalidate : 60
    }
  })
  return res.data;
  }

export default async function AdminDetails({params}) {
  const admin = await getAdmin(params.id)
  return (
    <Layout>
    <div className="flex  flex-row gap-6 shadow shadow-violet-200 mt-12">
      <div className='basis-1/2 px-6 py-3 bg-slate-50'>
      <p className=' text-violet-600 uppercase mt-5'> View  Aministrator # {params.id}</p>
      <div className='mt-6' key={admin.id}>
      <p><span>ID</span> {admin.id}</p>
      <p data-label="Name"><span >Full Name</span>{admin.fullname}</p>
      <p data-label="Phone"><span>Phone</span> {admin.phone}</p>
      <p data-label="Email"> <span>Email</span>{admin.email}</p>
      <p data-label="UserName"> <span>Username</span>{admin.username}</p>
    </div>
      </div>
    <div className="flex-row mb-6"> 
    <p className='text-xl  text-violet-700 px-3 py-2 '>Operations</p>
    <div className='flex flex-col justify-center'>
      <Link className=' hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer' href='/team'>Add Administrator</Link>
      <Link className=' hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer' href='/update'>Update administrator</Link>
      <Link className=' hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer' href='/delete'>delete Administrator</Link>
      <Link className=' hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer' href='/team'>All Administrator</Link>
      <Link className=' hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer' href='/reset'>Reset Password</Link>
    </div> 
    </div>
    </div>
      
   

    </Layout>
  )
}
