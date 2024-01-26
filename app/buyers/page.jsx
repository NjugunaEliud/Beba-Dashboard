import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import avataImage from '../../public/avatar.jpg'


export default function Buyers() {
  return (
    <Layout >
    <div className="card has-table">
    <header className="card-header">
      <p className="card-header-title">
        <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
        Buyers
      </p>
      <a href="#" className="card-header-icon">
        <span className="icon"><i className="mdi mdi-reload"></i></span>
      </a>
    </header>
    <div className="card-content">
      <table>
      <div className="card-content">
<table>
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>City</th>
      <th>Orders</th>
      <th>Total spent</th>
      <th>Last order</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="image-cell">
        <section className="image">
          <Image
             src={avataImage}
            className="rounded-full"
            alt="Rebecca Bauch"
            width={50}
            height={50}
          />
        </section>
      </td>
      <td data-label="Name">Rebecca Bauch</td>
      <td data-label="Company">email@gmail.com</td>
      <td data-label="Company">254123456789</td>
      <td data-label="City">Nairobi</td>
      <td data-label="Orders">20</td>
      <td data-label="Total spent">
        Ugs 7655
      </td>
      <td data-label="Created">
        <small className="text-gray-500" title="Oct 25, 2021">
          Oct 25, 2021
        </small>
      </td>
    </tr>
    
  </tbody>
</table>
</div>
      </table>
      <div className="table-pagination">
        <div className="flex items-center justify-between">
          <div className="buttons">
            <button type="button" className="button active">1</button>
            <button type="button" className="button">2</button>
            <button type="button" className="button">3</button>
          </div>
          <small>Page 1 of 3</small>
        </div>
      </div>
    </div>
  </div>
  </Layout>
  )
}
