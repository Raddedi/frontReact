import React from 'react';
import Logo from '../../images/assurance4.png';
import '../../css/bootstrap.min.css'
import '../../css/font-awesome.css'
import '../../css/lightbox.css'
import '../../css/templatemo-hexashop.css'
import '../../css/owl-carousel.css'
import { Outlet } from 'react-router-dom';

const NavBar: React.FC = () => {
    
    return (
        <>
            
            {/* Preloader End */}

            {/* Header Area Start */}
            <header className="header-area header-sticky" style={{ backgroundColor: '#1C2434' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* Logo Start */}
                                <a href="index.html" className="logo">
                                    <img src={Logo} style={{ height: '100px', width: '200px' }} alt="Logo" />

                                </a>
                                {/* Logo End */}
                                {/* Menu Start */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a style={{ color: 'aliceblue' }} href="#top" className="active">Home</a></li>
                                    <li className="scroll-to-section"><a style={{ color: 'aliceblue' }} href="#men" className="active">Smart Phones</a></li>
                                    <li className="scroll-to-section"><a href="#women" className="active">Electroménager</a></li>
                                    <li className="scroll-to-section"><a href="#kids" className="active">Liste Publication</a></li>
                                    
                                    <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* Menu End */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />

        </>
    );
};

export default NavBar;
