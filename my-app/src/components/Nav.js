import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
         <Link to="/">홈</Link>
         <Link to="/about">소개</Link>
        </div>
    );
}

export default Nav;