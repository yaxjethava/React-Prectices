import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item h-100 active">
                        <img className="d-block w-100 h-100" src="https://cmsimages.shoppersstop.com/Holi_Banner_Static_web02_d4ff96623a/Holi_Banner_Static_web02_d4ff96623a.gif" alt="First slide" />
                    </div>
                    <div className="carousel-item h-100">
                        <img className="d-block w-100 h-100" src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item h-100">
                        <img className="d-block w-100 h-100" src="https://cmsimages.shoppersstop.com/holi_beauty_sale_web_d0bd39030f/holi_beauty_sale_web_d0bd39030f.png" alt="Third slide" />
                    </div>
                </div>

                <a className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default HeroSection
