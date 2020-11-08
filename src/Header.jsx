import React from 'react';
import Logo from '../src/images/logo.png';

const Header = () => {
    return (<>
        <div className = 'head'>
            <img src = {Logo} alt = "logo" width = '50' height = '50' className = 'logo' />
            <h1 className = "header">Aalok Keep</h1>
        </div>
    </>);

};

export default Header;