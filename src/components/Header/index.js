import { Fragment } from "react";
import { Link } from "react-router-dom";
import cv from '../../images/Resume_Sam_Grandvincent.pdf'


const Header = () => {



    return (
        <Fragment>
            <nav className="navbar bg-body-tertiary">
                <Link className="navbar-brand" to="/contact">
                    <button className="buttonHeader buttonLeft"><span>Contact</span></button>
                </Link>
                
                <a href={cv} target="_blank" 
                    rel="noreferrer">
                    <button className="buttonHeader buttonRight"><span>Resume</span></button>
                </a>
                
               
            </nav>
        </Fragment>

    )
}

export default Header;