import React from "react"; 
import {Link} from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </link>
            <h1> Hello world</h1>
        </div>
    );
}

export default Header;
