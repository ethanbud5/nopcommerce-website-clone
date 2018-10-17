import React from "react";
import ("./Main.css")

function Main(props){

    return(
        <div>
            <div className="hero_image">
                <div className="center_content">
                    <h1>Open-Source & Free</h1>
                    <h3>eCommerce solution</h3>
                    <div className="big_btn_container">
                        <button className="green_btn hero_btn">
                            Download for Free
                        </button>
                        <button className="blue_btn hero_btn">
                            view live demo
                        </button>
                        <button className="green_btn hero_btn">
                            request a quote
                        </button>
                    </div>
                    <img className="devices_images" src="https://www.nopcommerce.com/App_Themes/moderndesign/images/devices.png" alt="devices"/>
                </div>
            </div>
            <div className="welcome_text">
                <h2>Welcome to the official nopCommerce website</h2>
                <p>nopCommerce is a universal eCommerce platform fitting every merchant’s needs: it powers both corporate and small business sites all over</p> 
                <p>the world, companies selling physical and digital goods. nopCommerce is a transparent and well-structured solution, it combines best features</p> 
                <p>of open-source and commercial software.</p>
                <p>The platform has everything you need to <span><a href="#">get started</a></span> and grow your eCommerce business.</p>
            </div>
        </div>
    )
}

export default Main;