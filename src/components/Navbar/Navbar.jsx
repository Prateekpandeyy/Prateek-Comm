import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import "./navbar.scss";
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
       <>
       <header>
        <div className='container'>
            <div className='grid navbar-grid'>
            <div className='logo'>
                PRATEEK 
            </div>
            <nav className={show ? "menu-mobile" : "menu-web"}>
                <ul>
                    <li>
                        <Link to = "/">
                        Catalog
                        </Link>
                       
                    </li>
                    <li>
                    <Link to = "/">
                       How it works
                        </Link>
                    </li>
                   
                    <li>
                    <Link to = "/">
                        Pricing
                        </Link>
                    </li>
                    <li>
                    <Link to = "/">
                       Blog
                        </Link>
                    </li>
                    <li>
                    <Link to = "/">
                      Services
                        </Link>
                    </li>
                    <li>
                    <Link to = "/">
                    Use - cases
                        </Link>
                    </li>
                    <li>
                    <Link to = "/">
                      Need help
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="ham-menu">
                <button onClick={() => setShow(!show)}>
                <GiHamburgerMenu fontSize={32} />
                </button>
            </div>
            </div>
       
        </div>
       </header>
       </>
    )
}
export default Navbar