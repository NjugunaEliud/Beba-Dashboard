import Layout from "../components/Layout";
import {ShoppingCartIcon , CurrencyDollarIcon, TvIcon ,PhoneIcon, LightBulbIcon } from "@heroicons/react/24/solid";

export default function Purchases() {
    return (
      <Layout>
        <p className="text-gray-700 text-3xl mb-5 font-bold">Purchase Products</p>
        <p className="text-gray-700 text-3xl mb-2 "><small>In Stock</small></p>
  
        <section className="section main-section">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
      {/* Card 1 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Computing</h3>
              <h1>51</h1>
            </div>
            <span className="icon widget-icon text-green-500">
              <TvIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Phones&Tablets</h3>
              <h1>Ush 700</h1>
            </div>
            <span className="icon widget-icon text-blue-500">
              <PhoneIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Eletrical Appliances</h3>
              <h1>256</h1>
            </div>
            <span className="icon widget-icon text-red-500">
              <LightBulbIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-6">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-finance"></i></span>
          Product Available
        </p>
        <a href="#" className="card-header-icon">
          <span className="icon"><i className="mdi mdi-reload"></i></span>
        </a>
      </header>
      <div className="card-content">
        <div className="chart-area">
          {/* Replace the following line with your actual chart component */}
          <canvas id="big-line-chart" width="2992" height="1000" className="chartjs-render-monitor block" style={{ height: '400px', width: '1197px' }}></canvas>
        </div>
      </div>
    </div>
  </section>
      </Layout>
    );
  }
  