"use client"
import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Axios from 'axios'
import { useState , useEffect } from 'react'


export default  function Auctions() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      "https://us-central1-bidleo-398811.cloudfunctions.net/view_all_products",
      {}
    )
      .then((res) => {
        // console.log("GEtting Products DATA From::", res);
        const filteredProducts = res.data.products.filter(
          (product) => product.type === "bidding"
        );

        setLoading(false) ;
        setProducts(filteredProducts);
      })
      .catch((err) => {
        setLoading(false) ;
        console.log(err);
      });
  }, []);
return (
<Layout>
<div>
<p className='font-bold  mt-3 mb-3 text-violet-600'>Auction Products</p>
      {loading ? (
        <p className='text-violet-500 text-center '>Loading...</p>
      ) : (
<div className="card has-table">
  <div className="card-content">
    <table>
      <thead>
        <tr className="bg-gray-100">
          <th>Auction</th>
          <th>Start Date </th>
          <th>End Date</th>
          <th>Category</th>
          <th>Cost</th>
        </tr>
      </thead>
  <tbody>
  
  {products.map(product =>(
  <tr key={product.id}>
  <td data-label="Auction" className="flex items-center">
  <section  className="flex items-center"> 
    <Image
      src={product.image_uri}
      alt="Product"
      width={50}
      height={50}
      className="text-sm"
    />
    <p className="text-sm ml-2">{products.name}</p> 
  </section>
</td>
      <td data-label="Auction Start" className="ml-2">
         {product.start_date}
        </td>
      <td data-label="Auction End" className="ml-2">
         {product.end_date}
        {/* <span className="bg-gray-200 rounded-full p-1 ml-2 sm:ml-12 text-gray-500 sm:text-center sm:text-sm">in 5 days</span> */}
        </td>
      <td data-label="Category">{product.category}</td>
      <td data-label="Cost">{product.cost}</td>
    </tr>
    ))}
      </tbody>
    </table>
  </div>
</div>
   )}
  </div>
      
    </Layout>
  )
}