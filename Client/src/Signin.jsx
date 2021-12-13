import React from "react";
import "./Signin.css";
import {Link} from 'react-router-dom';

export default function Signin() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-inner__khai">
      <form onSubmit={submitHandler} className="form__khai">
        <h2>Đăng nhập</h2>
        <div className="form-group__khai">
          <label htmlFor="name" className="form-label__khai">
            Username
          </label>
          <input
            className="form-input__khai"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group__khai">
          <label htmlFor="email" className="form-label__khai">
            Email
          </label>
          <input
            className="form-input__khai"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group__khai">
          <label htmlFor="password" className="form-label__khai">
            Password
          </label>
          <input
            className="form-input__khai"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="form-signin-btn__khai">Đăng nhập</button>
        <span className='form-input-signin__khai'>
          Bạn chưa có tài khoản? 
           <Link to='/'> Đăng ký ngay</Link>
        </span>
      </form>
    </div>
  );
}
