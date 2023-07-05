import { Fragment } from "react";
import { Link } from "react-router-dom";
import cv from '../../images/CV_English_Sam_Grandvincent.pdf'


const Header = () => {



    return (
        <Fragment>
            <nav className="navbar bg-body-tertiary">
                <Link className="navbar-brand" to="/contact">
                    <button className="buttonHeader" style={{marginLeft: '54px'}}><span>Contact</span></button>
                </Link>
                
                <a href={cv} target="_blank" 
                    rel="noreferrer">
                    <button className="buttonHeader" style={{marginRight: '54px'}}><span>My CV</span></button>
                </a>
                
               
            </nav>
        </Fragment>

    )
}

export default Header;