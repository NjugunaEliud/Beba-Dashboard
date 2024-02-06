import React from 'react'
import Layout from '../components/Layout'
import { Delete, Edit, Search } from '@mui/icons-material'
import Link from 'next/link'
import axios from 'axios'

async function getAdmins(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/users',{
    next:{
      revalidate : 30
    }
  })
  return res.data;
  }

export default async function Teams() {
 const admins = await getAdmins();
  return (
    <Layout>
 <main className='mb-3'>
    <div className="flex justify-between">
    <p className='font-bold text-xl text-violet-600'>Users</p>
    <div className="flex-row mb-6"> 
    <p className='text-xl font-bold text-violet-700 px-3 py-2'>Operations</p>
    <span className='flex justify-center hover:bg-violet-600 mt-1 rounded-sm px-2 hover:text-white hover:cursor-pointer'>
      <Link href='/team/addadmin'>Add Administrator</Link>
    </span>   
    </div>
    </div>
  <div className="card has-table">
  <div className="card-content">
    <table>
      <thead>
        <tr className="bg-gray-100">
          <th>ID</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Username</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {admins.map(admin =>(
      <tr key={admin.id}>
      <td data-label="ID">{admin.id}</td>
      <td data-label="Name">{admin.fullname}</td>
      <td data-label="Phone">{admin.phone}</td>
      <td data-label="Email">{admin.email}</td>
      <td data-label="UserName">{admin.username}</td>
      <td >
      <span  className='flex items-center justify-between'>
      <Link href={`/team/${admin.id}`}><Search className="block h-4 w-4 hover:cursor-pointer text-violet-700 " aria-hidden="true" /></Link>
      <Link href={`/team/${admin.id}/update`}><Edit className="block h-4 w-4 hover:cursor-pointer text-violet-700" aria-hidden="true" /></Link>
      <Delete className="block h-4 w-4 hover:cursor-pointer text-violet-700" aria-hidden="true" />
      </span>
      </td>
    </tr>

    ))}
      </tbody>
    </table>
  </div>
</div>

        </main>
    </Layout>
  )
}
