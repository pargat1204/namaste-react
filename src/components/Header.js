import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginLogout, setLoginLogout] = useState("Login");
    return (
        <div className='header'>
            <div className='logo'>
                <Link><img className="logo-img" src={LOGO_URL} /></Link>
            </div>
            <div className='nav-items'>
                <div className="nav-item">
                    <Link className="item" to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link className="item" to="/about">About</Link>
                </div>
                <div className="nav-item">
                    <Link className="item" to="/contact">Contact</Link>
                </div>
                <div className="login-logout">
                    <button onClick={() => {
                        loginLogout === "Login" ? setLoginLogout("Logout") : setLoginLogout("Login");
                    }}>{loginLogout}</button>
                </div>
            </div>
        </div>
    );
}

export default Header;