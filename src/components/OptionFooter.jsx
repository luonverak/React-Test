import React from "react";
import '../style/footer-bloc.css';
const OptionFooter=({title,text1,text2,text3})=>{
    return (
        <>
            <div className="footer-bloc">
                <h1>{title}</h1>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
        </>
    )
}
export default OptionFooter;