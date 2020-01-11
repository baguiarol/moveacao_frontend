import React from 'react'
import { Link } from 'react-router-dom'


export const NavItem = props => {
    let navItem =
        <li className={`nav-item mr-2 ${props.url === window.location.pathname ? 'active' : ''}`}>
            <Link to={`${props.url}`} className="nav-link pl-2">{props.label}</Link>
        </li>
    return navItem
}