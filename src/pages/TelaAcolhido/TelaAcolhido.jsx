import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import  FormAcolhido  from '../../components/Form/FormAcolhido/FormAcolhido'
import {Navside, NavsideItem} from '../../components/Navside/'


export default props => (
    <React.Fragment>
        <Navbar/>
        {/*<Navside>
            <NavsideItem url="/tela_login" label="Login"/>
        </Navside>*/}
        <FormAcolhido title = "Cadastro Acolhido"/>
        <Footer/>

    </React.Fragment>
)