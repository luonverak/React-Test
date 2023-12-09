import React from "react";
import '../style/header-page.css'
import CompanyName from "./CompanyName";
import Menu from "./Menu";
import SignUp from "./SignUp";
const HeaderPage=()=>{
    return (
        <>
            <div className="header-page">
                <div className="page-name">
                    {<CompanyName/>}
                </div>
                <div className="page-menu">
                    {<Menu/>}
                </div>
                <div className="search-botton">
                    {<SignUp/>}
                </div>
            </div>
        </>
    );
}
export default HeaderPage;