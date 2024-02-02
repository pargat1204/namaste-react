const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png' />
            </div>
            <div className='nav-items'>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Cart</div>
            </div>
        </div>
    );
}

export default Header;