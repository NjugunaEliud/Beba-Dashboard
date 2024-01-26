import React from 'react'
import Layout from '../components/Layout'
import avataImage from '../../public/avatar.jpg'
import Image from 'next/image'
export default function Sellers() {
  return (
    <Layout >
    <div className="card has-table">
    <header className="card-header">
      <p className="card-header-title">
        <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
        Sellers
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
      <th>City</th>
      <th>No product sold</th>
      <th>Total Amount</th>
      <th>Last Order</th>
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
          />
        </section>
      </td>
      <td data-label="Name">Rebecca Bauch</td>
      <td data-label="Company">seller@gmail.com</td>
      <td data-label="City">Kampala</td>
      <td data-label="No.">32 </td>
      <td data-label="Created">
        <small className="text-gray-500" title="Oct 25, 2021">
          Oct 25, 2021
        </small>
      </td>
      <td data-label="Created">
        <small className="text-gray-500" title="Oct 25, 2021">
          Oct 25, 2021
        </small>
      </td>
      {/* <td className="actions-cell">
        <section className="buttons right nowrap">
          <button className="button small green --jb-modal" data-target="sample-modal-2" type="button">
            <span className="icon">
              <i className="mdi mdi-eye"></i>
            </span>
          </button>
          <button className="button small red --jb-modal" data-target="sample-modal" type="button">
            <span className="icon">
              <i className="mdi mdi-trash-can"></i>
            </span>
          </button>
        </section>
      </td> */}
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
