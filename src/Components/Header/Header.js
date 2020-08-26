import React from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt='KittyCut' />
                </div>
                <div className="header-name">
                    KittyCut
                </div>
            </div>
        </div>
    )
}

export default Header;