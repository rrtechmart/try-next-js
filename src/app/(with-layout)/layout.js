import Navbar from '@/component/Navbar';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>

            {children}

            <footer>Footer</footer>

        </div>
    );
};

export default WithLayout;