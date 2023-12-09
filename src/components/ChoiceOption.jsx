import React from "react";
import '../style/choice-option-page.css';
const ChoiceOption = ({ title, price, user, storage, contact, support, color, buttonTitle, textColor }) => {
    return (
        <>
            <div className="choice-option-page">
                <div className="choice-header">
                    <p>{title}</p>
                </div>
                <div className="decription-body">
                    <h1>${price} <span>/ mo</span></h1>
                    <p>{user}</p>
                    <p>{storage}</p>
                    <p>{contact}</p>
                    <p>{support}</p>
                    <button type="button" style={{ backgroundColor: color, color: textColor }} >{buttonTitle}</button>
                </div>
            </div>
        </>
    )
}
export default ChoiceOption;