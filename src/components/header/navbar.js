import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className='navbarWraper'>
        <h1>LOGO</h1>
        <div className='navlinksHolder'>
            <button>Sign In</button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMzfoOOlOSK-F7s_U2fzbPu_J_YnImdq1Eg&usqp=CAU" alt='profilepictre'/>
        </div>
        </div>
    )
}

export default Navbar
