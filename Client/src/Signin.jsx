import React from "react";
import "./Signin.css";
import {Link} from 'react-router-dom';

export default function Signin() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-inner">
      <form onSubmit={submitHandler} className="form">
        <h2>Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="form-signin-btn">Đăng nhập</button>
        <span className='form-input-signin'>
          Bạn chưa có tài khoản? 
           <Link to='/'> Đăng ký ngay</Link>
        </span>
      </form>
    </div>
  );
}
