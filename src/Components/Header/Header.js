import React from "react";
import "./Header.css"

function Header(props){

    return(
        <div>
            <header className="above_header">
                <img className="main_logo" src="https://www.nopcommerce.com/images/logo.png" alt="Logo"/>
                <div className="links_right_container">
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                    <div className="left_two_items">
                        <div><strong>1024</strong></div>
                        <div>users online</div>
                    </div>
                    <div className="left_two_items">
                        <img src="https://www.nopcommerce.com/App_Themes/moderndesign/images/cart.png" alt="shopping cart"/>
                        <span>(0)</span>
                    </div>
                </div>
            </header>
            <nav className="header_container">
            </nav>
        </div>
    )
}

export default Header;