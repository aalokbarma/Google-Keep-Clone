import React from 'react';

const Footer = () => {

    const Year = new Date().getFullYear();

    return (<>
        <p className = "copyright">Copyright © | All Rights Reserved | {Year} </p>
    </>
    );

};

export default Footer;