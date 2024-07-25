import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF Andheri West Mumbai" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <div className="banner-stick-card">
                            <span>Starting At</span>
                            <h2>4 Cr* Onwards</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Location</span>
                            <h2>At Andheri West , Mumbai</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>CONFIGURATIONS</span>
                            <h2>2 & 3 BHK APARTMENTS</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Status</span>
                            <h2>New LAUNCH</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
