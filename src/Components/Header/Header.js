import React from "react";
import "./Header.css"

function Header(props){

    return(
        <div>
            <header className="above_header">
                <img className="main_logo" src="https://www.nopcommerce.com/images/logo.png" alt="Logo"/>
                <div className="links_right_container">
                    <a href="#">Register</a>
                    <a href="#"  className="right_border_items">Log in</a>
                    <div >
                        <div className="text_align_center"><strong>1024</strong></div>
                        <div className="small_text">users online</div>
                    </div>
                    <div className="left_two_items">
                        <img src="https://www.nopcommerce.com/App_Themes/moderndesign/images/cart.png" alt="shopping cart"/>
                        <span> (<strong>0</strong>)</span>
                    </div>
                </div>
            </header>
            <nav className="header_container">
                <ul className="nav_container">
                    <li>Products</li>
                    <li>Downloads</li>
                    <li>Support & Services</li>
                    <li>Community</li>
                    <li>Partners</li>
                    <li>Company</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;