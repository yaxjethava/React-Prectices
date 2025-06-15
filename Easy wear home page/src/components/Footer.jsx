import React from 'react'

const Footer = () => {
    return (
        <>

            {/* Footer */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div style={{gap:"10px",display:"flex"}}> 
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />
                                    Easy Wear
                                </h6>
                                <p>
                                    There are useful and easy wear that can make you cool and easy
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Fashion
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Watches
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Phones
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Shoes
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        F&Q
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p style={{gap:"10px",display:"flex",justifyContent:"center"}}>
                                    <i className="fas fa-home me-3" /> Amreli, Gujarat, India
                                </p>
                                <p style={{gap:"10px",display:"flex",justifyContent:"center"}}>
                                    <i className="fas fa-envelope me-3" />
                                    easywear@gmail.com
                                </p>
                                <p style={{gap:"10px",display:"flex",justifyContent:"center"}}>
                                    <i className="fas fa-phone me-3" /> + 91 12345 67829
                                </p>
                                <p style={{gap:"10px",display:"flex",justifyContent:"center"}}>
                                    <i className="fas fa-print me-3" /> + 91 12345 67820
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2025 Copyright:
                    <a className="text-reset fw-bold" href="#">
                        easywear.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>


    )
}

export default Footer
