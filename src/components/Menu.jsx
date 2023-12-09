/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../style/menu.css';
const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li> <a href="#">Features</a> </li>
                    <li> <a href="#">Enterprise</a> </li>
                    <li><a href="#">Support</a>  </li>
                    <li><a href="#">Pricing</a>  </li>
                </ul>
            </div>
        </>
    );
}
export default Menu;