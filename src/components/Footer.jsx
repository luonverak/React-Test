import React from "react";
import '../style/footer-page.css';
import OptionFooter from "./OptionFooter";
const Footer=()=>{
    return (
        <>
            <div className="footer-page">
                <div className="logo">
                    <div className="logo-page">
                        <img src="asset/image/Bootstrap_(front-end_framework)-Logo.wine.png" width={90} alt="" />
                    </div>
                    <p>@ 2017</p>
                </div>
                <div className="footer-more-option">
                    {<OptionFooter title="Features"
                                    text1="Cool stuff"
                                    text2="Random feature"
                                    text3="Team feature"

                    />}
                    {<OptionFooter title="Resource"
                                    text1="Resource"
                                    text2="Resource name"
                                    text3="Another resource"

                    />}
                    {<OptionFooter title="About"
                                    text1="Team"
                                    text2="Locations"
                                    text3="Privacy"

                    />}
                </div>
            </div>
        </>
    );
}
export default Footer;