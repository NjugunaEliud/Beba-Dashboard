"use client"
import React from 'react'
import Layout from '../components/Layout'
import { Delete, Edit, Search } from '@mui/icons-material'
import Link from 'next/link'
import Axios from 'axios'
import { useState , useEffect } from 'react'

export default function Teams() {
  const [admins, setAdmins] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get(
      "https://us-central1-bidleo-398811.cloudfunctions.net/viewauctioneer",
      {}
    )
      .then((res) => {
        // console.log("GEtting Products DATA From::", res);
        const auctioneers = res.data.admins(
          (admin) => admin.utype === "auctioneer"
        );

        setLoading(true);
        setAdmins(auctioneers );
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, []);


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
          <th>User Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {admins.map(admin =>(
      <tr key={admin.id}>
      <td data-label="ID">{admin.id}</td>
      <td data-label="Name">{admin.name}</td>
      <td data-label="Phone">{admin.mobile_no}</td>
      <td data-label="Email">{admin.email}</td>
      <td data-label="UserType">{admin.utype}</td>
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
