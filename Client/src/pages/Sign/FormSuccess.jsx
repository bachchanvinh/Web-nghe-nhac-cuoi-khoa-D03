import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <div className="form-content-right__khai">
      <h1 className="form-success__khai">
       tạo tài khoản thành công!
        <Link className="form-success-link-khai" to="/signin"> Đăng nhập ngay</Link>
      </h1>
      <img
        className="form-img-2__khai"
        src="img/img-2.png"
        alt="success-image"
      />
       
    </div>
  );
};

export default FormSuccess;
