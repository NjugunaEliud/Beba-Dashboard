import Layout from "../components/Layout";import { UsersIcon , ShoppingCartIcon , CurrencyDollarIcon } from "@heroicons/react/24/solid";

export default function Biddings() {
    return (
      <Layout>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Biddings</p>
  
        <section className="section main-section">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
      {/* Card 1 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-center">
            <div className="widget-label">
              <h3 className="font-bold">Todays Bids</h3>
              <h1>5</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-center">
            <div className="widget-label">
              <h3 className="font-bold">Bidders</h3>
              <h1>60</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3 className="font-bold">Winners</h3>
              <h1>4</h1>
            </div>
            <span className="icon widget-icon text-gray-500">
              <ul className="list-decimal">
                <li>
                    John Doe
                </li>
                <li>
                    Max Doe
                </li>
                <li>
                    Alex  Doe
                </li>
                <li>
                    Alan Doe
                </li>
              </ul>
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
          Bid Products
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
  