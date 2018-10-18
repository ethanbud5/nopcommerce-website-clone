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
            <div className="owner_stats_image">
                <div className="dotted_box">
                    <p>Trusted by over <strong>50,000</strong> store owners.</p>
                    <p>Downloaded more than <strong>2,500,000</strong> times</p>
                </div>
            </div>
            <div className="conference_promo_container">
                <div className="opacity_background">
                    <img className="share_banner" src="https://www.nopcommerce.com/App_Themes/moderndesign/images/share-and-get-$200-2.png" alt="share"/>
                    <div className="promo_text_container">
                        <h1>nopCommerce Days 2018</h1>
                        <p className="date_text">8-9 November, Las Vegas, USA</p>
                        <button className="green_btn hero_btn">Find out more</button>
                        <div className="transparent_background_container">
                            <p className="big_name">Big Names</p>
                            <div className="company_box_container">
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/microsoft.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/google.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/hubspot.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/avalara.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/shipstation2.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/fedex.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/semrush.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/baymard.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <img src="https://www.nopcommerce.com/images/conference-2018/companies-colored/sendinblue.png" alt="company logo"/>
                                </div>
                                <div className="company_box">
                                    <p>nopCommerce partners</p>
                                </div>
                            </div>
                        </div>
                        <div className="background_darker">
                            <div className="conf_theme">
                                <h2>Conference themes</h2>
                                <ul>
                                    <li>Main changes and trends in eCommerce in 2019</li>
                                    <li>ASP.NET Core and other development topics</li>
                                    <li>Case studies and success stories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;