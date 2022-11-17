import React from 'react'
import { FaFacebook, FaGoogle, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SignUp({setShowForm}) {
  return (
    <div className="container-fluid ">
      <div className="form-login">
        <section>
          <div className="form-content">
            <div className="form">
              <h2>SIGN UP</h2>
              <form action="">
                <div className="input-form">
                  <span>Email</span>
                  <input type="text" name="email" />
                </div>
                <div className="input-form">
                  <span>Password</span>
                  <input type="password" name="password" />
                </div>
                <div className="remember-to-login">
                  <label>
                    <input type="checkbox" name="remember-to-login" />
                    Remember to login
                  </label>
                </div>
                <div className="input-form">
                  <input type="submit" value="Login" />
                </div>
                <div className="input-form">
                  <p>
                  Do you have an account? <Link to="/user/log-in" onClick={()=>setShowForm(true)}>Log in</Link>
                  </p>
                </div>
              </form>
              <h3>Login with social network</h3>
              <ul class="icon-login">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaGoogle />
                </li>
                <li>
                  <FaTiktok />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
          {/* <!--Kết Thúc Phần Nội Dung--> */}
        </section>
      </div>
    </div>
  )
}
