
import Layout from "../components/Layout";
import { UsersIcon , ShoppingCartIcon , ChartBarIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
    return (
      <Layout>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
  
        <section className="section main-section">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
      {/* Card 1 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Clients</h3>
              <h1>512</h1>
            </div>
            <span className="icon widget-icon text-green-500">
              <UsersIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Sales</h3>
              <h1>Ush 7,770</h1>
            </div>
            <span className="icon widget-icon text-blue-500">
              <ShoppingCartIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>Performance</h3>
              <h1>256%</h1>
            </div>
            <span className="icon widget-icon text-red-500">
              <ChartBarIcon className="w-20 h-20" />
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Performance Chart */}
    <div className="card mb-6">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-finance"></i></span>
          Performance
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
  