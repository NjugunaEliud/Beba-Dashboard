"use client"
import Layout from "../components/Layout";
import { UsersIcon , ShoppingCartIcon , ChartBarIcon,ChevronDownIcon, EyeIcon, ShareIcon, ChevronLeftIcon, TicketIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import avataImage from '../../public/avatar.jpg'
import s24 from '../../public/s24.jpg'
import { CurrencyDollarIcon ,FilterIcon ,ChevronRightIcon} from "@heroicons/react/24/outline";
import { ConfirmationNumberOutlined, CurrencyPound, FilterAltOutlined, MonetizationOnOutlined, RemoveRedEyeOutlined, ShareOutlined } from "@mui/icons-material";


export default function Dashboard() {
return (
<Layout>
<p className="text-gray-700  mt-4">Account/Dashboard</p>
<div className="flex items-center justify-between px-4 lg:px-8 py-4">
<p className="text-gray-700 text-3xl mb-3 font-bold mt-4">Dashboard</p>
   <div className="flex items-center">
        <div className="relative">
        <div className="flex items-center">
      <button className="bg-gray-100 py-2 px-4 rounded-md">
      <span className="mr-2">
        <FilterAltOutlined className="w-5 h-5 text-gray-500" />
      </span>
        Filter
      </button>
    
  </div>

    </div> 
  </div>
</div>
<section className="section main-section ">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-4 mb-6">
      {/* Card 1 */}
      <div className="card border border-violet-100">
        <div className="card-content bg-gray-100">
          <div className="flex  items-center justify-center">
            <div className="text-center">
            <span className="icon widget-icon text-center">
            <div className="flex items-center justify-center">
            <div className="bg-violet-700 rounded-full p-1">
              <MonetizationOnOutlined className="w-6 h-6 text-white opacity-50" />
            </div>
          </div>

            </span>
              <h3 className="text-violet-600 font-bold text-center text-xl">UGX 5,000,000</h3>
              <h1 className="text-center font-bold"><small>Revenue</small></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card ">
        <div className="card-content bg-gray-100">
          <div className="flex  items-center justify-center">
            <div className="text-center">
            <span className="icon widget-icon text-center">
             <div className="flex items-center justify-center">
              <div className="bg-violet-500 rounded-full p-1">
                <ConfirmationNumberOutlined className="w-6 h-6 text-white opacity-50" />
              </div>
            </div>

            </span>
              <h3 className="text-violet-400 font-bold text-center text-xl">2,500</h3>
              <h1 className="text-center font-bold"><small>Tickets Sold</small></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card ">
        <div className="card-content bg-gray-100">
          <div className="flex  items-center justify-center">
            <div className="text-center">
            <span className="icon widget-icon text-center">
            <div className="flex items-center justify-center">
              <div className="bg-pink-400 rounded-full p-1">
                <RemoveRedEyeOutlined className="w-6 h-6 text-white opacity-50" />
              </div>
            </div>
            </span>
              <h3 className="text-gray-400 font-bold text-center text-xl">1,000</h3>
              <h1 className="text-center font-bold"><small>Items Sold</small></h1>
            </div>
          </div>
        </div>
      </div>
       {/* Card 4 */}
       <div className="card ">
        <div className="card-content bg-amber-50">
          <div className="flex  items-center justify-center">
            <div className="text-center">
            <span className="icon widget-icon text-center">
            <div className="flex items-center justify-center">
            <div className="bg-yellow-400 rounded-full p-1">
              <ShareOutlined className="w-6 h-6 opacity-50" />
            </div>
          </div>
            </span>
              <h3 className="text-red-800 font-bold text-center text-xl">200</h3>
              <h1 className="text-center font-bold"><small>Auctions</small></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between px-4 lg:px-8 py-4">
  <div className="text-lg font-semibold">Sales by Action</div>
  <div className="flex items-center">
    <div className="relative">
    Last Update: <span>10 minutes ago</span>
      <button className="bg-gray-100 py-2 px-4 rounded-md ml-3">
        Sort by :Sales
        {/* <span><ChevronDownIcon class="w-4 h-4 mr-2" /></span> */}
      </button>
    </div> 
  </div>
</div>
<div className="card has-table">
  <div className="card-content">
    <table>
      <thead>
        <tr className="bg-gray-100">
          <th>Auction</th>
          <th>Auction End</th>
          <th>Ticket sold</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
      <tr>
    <td data-label="Auction" className="flex items-center">
  <section  className="flex items-center"> 
    <Image
      src={s24}
      alt="S24"
      width={50}
      height={50}
      className="text-sm"
    />
    <p className="text-sm ml-2">Samsung S24</p> 
  </section>
</td>
      <td data-label="Auction End" className="ml-2">
        Monday,June 10
        <span className="bg-gray-200 rounded-full p-1 ml-12 text-gray-500"> in 5 days</span>
        </td>
      <td data-label="Ticket sold">500</td>
      <td data-label="Revenue">UGX 34</td>
    </tr>
    <tr>
    <td data-label="Auction" className="flex items-center">
  <section  className="flex items-center"> 
    <Image
      src={s24}
      alt="S24"
      width={50}
      height={50}
      className="text-sm"
    />
    <p className="text-sm ml-2">Samsung S24</p> 
  </section>
</td>
      <td data-label="Auction End" className="ml-2">
        <span className="sm:hidden">Monday,June 10</span>
        <span className="bg-gray-200 rounded-full p-1 ml-12 text-gray-500"> in 5 days</span>
        </td>
      <td data-label="Ticket sold">500</td>
      <td data-label="Revenue">UGX 34</td>
    </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="flex items-center justify-between px-4 lg:px-8 py-4 mt-12">
  <div className="text-lg font-semibold">Recent Action</div>

  <div className="flex items-center">
    <div className="relative">
      Last Update: <span>10 minutes ago</span>
      <button className="bg-gray-100 py-2 px-4 rounded-md ml-3 text-violet-600">
        View all Auctions
      </button>
    </div>
  </div>
</div>

<div className="card has-table">
  <div className="card-content">
    <table>
      <thead>
        <tr className="bg-gray-100">
          <th>Auction ID</th>
          <th>Bidder</th>
          <th>Date</th>
          <th>Time</th>
          <th>Ticket sold</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
      <tr>
    <td data-label="Auction ID">#2343245</td>

    <td data-label="Bidder" className="flex items-center">
  <section className="flex items-center"> {/* Added a flex container for the image and text */}
    <Image
      src={avataImage}
      alt="S24"
      width={50}
      height={50}
      className="text-sm"
    />
    <p className="text-sm ml-2">Ashley Wilson</p> {/* Added ml-2 for left margin */}
  </section>
</td>

      <td data-label="Date">21/3/2024</td>
      <td data-label="Time">18:30</td>
      <td data-label="Ticket sold">1</td>
      <td data-label="Total price">UGX 2,000</td>
    </tr>
    <tr>
    <td data-label="Auction ID">#2343245</td>

    <td data-label="Bidder" className="flex items-center">
  <section className="flex items-center"> {/* Added a flex container for the image and text */}
    <Image
      src={avataImage}
      alt="S24"
      width={50}
      height={50}
      className="text-sm"
    />
    <p className="text-sm ml-2">Ashley Wilson</p> {/* Added ml-2 for left margin */}
  </section>
</td>

      <td data-label="Date">21/3/2024</td>
      <td data-label="Time">18:30</td>
      <td data-label="Ticket sold">1</td>
      <td data-label="Total price">UGX 2,000</td>
    </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="table-pagination">
  <div className="flex items-center justify-end">
    <div className="buttons">
      <span><ChevronLeftIcon className="w-5 h-5" /></span>
      <button type="button" className="button">1</button>
      <button type="button" className="button active">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">...</button>
      <button type="button" className="button">10</button>
      <button type="button" className="button">5</button>
      <span><ChevronRightIcon className="w-5 h-5" /></span>

    </div>
  </div>
</div>
  </section>
      </Layout>
    );
  }
  