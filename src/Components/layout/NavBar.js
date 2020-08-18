import React from 'react'
import {Link} from 'react-router-dom'
import NavItems from './NavItems'
import {connect} from "react-redux"


const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">
                <h3> TODO APP</h3>


                </Link>

                 <NavItems/>


            </nav>
        </>
    )
}

const mapStateToProp = (state) => {
    console.log("adas")
}

export default connect(mapStateToProp) (NavBar);