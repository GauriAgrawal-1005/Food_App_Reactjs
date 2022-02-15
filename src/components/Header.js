import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div>
                <h2>Welcome to spoonacular</h2>
            </div>
            <div>
                <h3>Explore all your nutritional requirements here</h3>
            </div>
            <div>
                <h2>Recipe of the day</h2>
            </div>
        </>
    )
}

export default Header;