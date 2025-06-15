import React, { useState } from 'react'

const Navbar = () => {

    //it's for click is true or false
    const [click, setClick] = useState(true)

    //For changing theme
    const [themeColor, setTheme] = useState({
        heading:{
            color:"#007BFF"
        },
        color: "#000000",
        backgroundColor: "#ffffff",
        button: {
            backgroundColor: "#007BFF",
            color: "white"
        }
    })


    const changeTheme = (res) => {
        //add true or false
        setClick(res)

        if (res) {
            //if True so dark mode
            setTheme({
                heading:{
                    color:"#007BFF"
                },
                color: "#000000",
                backgroundColor: "#ffffff",
                button: {
                    backgroundColor: "#007BFF",
                    color: "white"
                }
            })

        } else {
            //if False so dark mode
            setTheme({
                heading:{
                    color:"#ffffff"
                },
                color: "#ffffff",
                backgroundColor: "rgb(0, 0, 0)",
                button: {
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "black"
                }
            })
        }
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg  border-bottom py-3`} style={themeColor}>
                <div className="container-fluid">
                    <a className={`navbar-brand`} style={themeColor.heading} href="#">Easy wear</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
                            <li className="nav-item mx-3 ">
                                <a className="nav-link active" style={themeColor} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3 ">
                                <a className={`nav-link`} style={themeColor} href="#">Blog</a>
                                <a href="#"></a>

                            </li>
                            <li className="nav-item mx-3 ">
                                <a className={`nav-link`} style={themeColor} href="#">Contact</a>
                            </li>
                            <li className="nav-item mx-3 ">

                                <a className={`nav-link`} style={themeColor} href="#">Blog</a>
                            </li>
                            <li className="nav-item mx-3 ">
                                <a className={`nav-link`} style={themeColor} href="#">About</a>
                            </li>
                        </ul>

                        <div className="theme-toggle-button">
                            <button className="btn btn-primary" onClick={() => changeTheme(!click)}>
                                {
                                  click ? "Dark" : "Light"  
                                }
                             
                            </button>
                        </div>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn`} style={themeColor.button} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
