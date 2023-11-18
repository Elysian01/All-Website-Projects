import "./css/navbar.css";
import { Link } from "react-router-dom";
import React,{useEffect} from 'react';

function Navbar(props) {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses = "";
    if(scrolled){
        navbarClasses = 'scrolled';
    }

    if (props.boxShadow)
        navbarClasses += ' nav-box-shadow';

    return (
        <header>
            <nav className = {navbarClasses} id="nav">
                <div className="nav-logo">
                    <div className="nav-heading">
                        <span><Link to ="/" className="nav-heading-logo"><i className="fa fa-utensils"></i> Yummy</Link></span>
                    </div>

                    <div className="hamburger">
                        <a href="#"><i className="fas fa-bars "></i></a>
                    </div>
                </div>

                <ul className="nav-links">
                    <li><Link className="nav-item" to="/">Home</Link></li>
                    <li><Link className="nav-item" to="/">South Indian</Link></li>
                    <li><Link className="nav-item" to="/">European</Link></li>
                    <li><Link className="nav-item" to="/profile">Profile</Link></li>
                    <li><Link className="nav-item" to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;