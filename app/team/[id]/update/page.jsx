"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '@/app/components/Layout';

async function getAdmin(id) {
  const res = await axios.get('http://localhost:4002/auctioneers/' + id);
  return res.data;
}

async function updateAdmin(id, newData) {
  const res = await axios.put('http://localhost:4002/auctioneers/' + id, newData);
  return res.data;
}

export default function Update({ params }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const adminData = await getAdmin(params.id);
      setAdmin(adminData);
    };

    fetchAdmin();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAdmin(params.id, admin);
      alert('Admin updated successfully');
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  return (
    <Layout>
      {admin && (
        <div className="card-content">
          <p className="uppercase mb-3 text-violet-700">Update Administrator {admin.id}</p>
          <form key={admin.id} className="shadow shadow-violet-400 py-3 px-12" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Full Name</label>
              <div className="control">
                <input
                  className="input"
                  required
                  name="name"
                  value={admin.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  className="input"
                  required
                  name="mobile_no"
                  value={admin.mobile_no}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  value={admin.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">User Type</label>
              <div className="control">
                <select className="input" name="utype" value={admin.utype} onChange={handleInputChange}>
                  <option value="admin">Admin</option>
                  <option value="auctioneer">Auctioneer</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="password" className="input" required  />
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
      )}
    </Layout>
  );
}
