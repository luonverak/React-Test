import React from "react";
import '../style/option-page.css';
import ChoiceOption from "./ChoiceOption";
const Option = () => {
    return (
        <>
            <div className="option-page">
                {<ChoiceOption title="Free"
                    price="0"
                    user="10 users included"
                    storage="2 GB of storage "
                    contact=" Email support"
                    support="Help center access"
                    buttonTitle="Sign up for free"
                />
                }
                {<ChoiceOption title="Pro"
                    price="15"
                    user="20 users included"
                    storage="10 GB of storage "
                    contact="Priority Email support"
                    support="Help center access"
                    buttonTitle="Get started"
                    color="rgb(0, 115, 255)"
                    textColor="white"
                />
                }
                {<ChoiceOption title="Enterprice"
                    price="29"
                    user="30 users included"
                    storage="15 GB of storage "
                    contact="Phone and Email support"
                    support="Help center access"
                    buttonTitle="Get started"
                    color="rgb(0, 115, 255)"
                    textColor="white"
                />
                }
            </div>
        </>
    )
}
export default Option;