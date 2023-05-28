import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/transparent-guitar-depo-logo copy-2.png';
import { useNavigate } from "react-router-dom";

function Navbar({currentCustomer}){

    const navigate = useNavigate();

    return <nav className="nav">
       
        <Link to='/' className="navbarLogo">
            <img src={logo} width={200} height={100} alt='music depo logo' /> 
        </Link>
        <div >{!currentCustomer ? 
                // <button type="button" onClick={() => navigate("/login")}>Login</button> 
                <p className="navbarMessage">please login or create account to purchase gear!</p>:
                    <p >Welcome, {currentCustomer.firstname} {currentCustomer.lastname}!</p>
                        }</div>

        <ul>
            <li>
                <Link to="/purchase-history">Purchase History</Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            <li>
                <Link to="/createaccount">CreateAccount</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            
        </ul>
    </nav>
}

export default Navbar;