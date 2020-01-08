import React from 'react'
import './Navbar.scss'

import { NavItem} from './NavItem/NavItem'
//import NavDropdown from '/home/brendaum/Área de Trabalho/siteartisan/src/components/Navbar/NavDrop/NavDrop.jsx'
import {Logo} from '/home/brendaum/Área de Trabalho/moveacao_frontend/src/components/Logo'

export default props => (
    <header className="cabecalho" >
        <div className = "partlogo">
        </div>
        <nav className="navbar navbar-expand-md">
            <Logo/>
            <button className="navbar-toggler icon-menu" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fa fa-ellipsis-v"></i>
            </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="menu navbar-nav ml-auto">
                        <NavItem url="/" label="Login"/>
                        <NavItem url="/" label = "Fazer Cadastro"/>
                        {/*<NavDropdown label="" url="/">
                            <NavItemDropdown url="/compdes" label="Computação Desplugada" />
                        </NavDropdown> */}

                    </ul>
                </div>
        </nav>
    </header>
)