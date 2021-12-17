import React from 'react'
import {useNavigate } from 'react-router-dom'
import './style.css'
import Typical from "react-typical";

const Welcome = () => {
    let navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/signin');
    }

    return (
        <div className="welcome-khoa container-fluid">
            <div className="welcome-row row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-img">
                    <img src="/assets/headphone.png" className="head-phone-img" alt="img-headphone"/>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-text">
                    <h1>Music for everyone</h1>
                    <p>Without music, life would be a mistake</p>
                    <div className="typing">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            '10 000+ Songs',
                            1200,
                            'Dowload music',
                            1200,
                            'No ad interruptions',
                            1200,
                            'Play any song',
                            1200,
                        ]}
                    />
                    </div>
                    <button onClick={navigateToHome} className="btn">Start Listening<h5>and get 3 months Premium member for free </h5></button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
