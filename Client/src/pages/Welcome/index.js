import React from 'react'
import {useNavigate } from 'react-router-dom'
import './style.css'
import Typical from "react-typical";

const Welcome = () => {
    let navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/home');
    }

    return (
        <div className="welcome-khoa container-fluid">
            <div className="welcome-row row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-img">
                    <img src="/assets/headphone.png" className="head-phone-img" alt="img-headphone"/>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-text">
                    <h1>Âm nhạc cho tất cả</h1>
                    <p>Không có âm nhạc, cuộc sống thật tẻ nhạt!</p>
                    <div className="typing">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'hơn 10.000 bài hát',
                            1500,
                            'Tải nhạc miễn phí',
                            1500,
                            'Không chứa quảng cáo',
                            1500,
                            'Nghe bất kì đâu',
                            1500,
                        ]}
                    />
                    </div>
                    <button onClick={navigateToHome} className="btn">Tham gia ngay</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
