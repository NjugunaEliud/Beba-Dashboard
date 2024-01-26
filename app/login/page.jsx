import Layout from "../components/Layout";
import { LockClosedIcon, UserIcon , SparklesIcon} from "@heroicons/react/24/solid";

export default function Login() {
  return (
    <Layout >
    <section className="section main-section">
      <div className="card">
        {/* <header className="card-header">
          <p className="card-header-title">
          <span className="icon">
            <LockClosedIcon className="w-6 h-6 " />
          </span>
            Login
          </p>
        </header> */}
        <div className="card-content">
          <form method="get">

            <div className="field spaced">
              <label className="label">Login</label>
              <div className="control icons-left">
                <input className="input" type="text" name="login" placeholder="user@example.com" autoComplete="username" />
                <span className="icon is-small left">
                  <UserIcon className="w-6 h-6" />
                </span>
              </div>
              <p className="help">
                Please enter your login
              </p>
            </div>

            <div className="field spaced">
              <label className="label">Password</label>
              <p className="control icons-left">
                <input className="input" type="password" name="password" placeholder="Password" autoComplete="current-password" />
                <span className="icon is-small left">
                  <LockClosedIcon className="w-6 h-6 "/>
                </span>
              </p>
              <p className="help">
                Please enter your password
              </p>
            </div>

            <div className="field spaced">
              <div className="control">
                <label className="checkbox"><input type="checkbox" name="remember" value="1" defaultChecked />
                  <span className="check"></span>
                  <span className="control-label">Remember</span>
                </label>
              </div>
            </div>

            <hr />

            <div className="field grouped">
              <div className="control">
                <button type="submit" className="button blue">
                  Login
                </button>
              </div>
              <div className="control">
                <a href="index.html" className="button">
                  Back
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
    </Layout>
  )
}
