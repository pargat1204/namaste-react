import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [loginLogout, setLoginLogout] = useState("Login");
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Cart</div>
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