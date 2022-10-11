import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-cyan-400">
    <div className="flex-1">
        <a href='/' className="btn btn-ghost text-white normal-case text-xl">QUIZbash</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0 text-white">
        <li><Link to='/'>Home</Link></li>
        </ul>
    </div>
</div>
        </div>
    );
};

export default Header;