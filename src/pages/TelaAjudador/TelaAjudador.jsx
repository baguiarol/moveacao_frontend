import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import  FormAjudador  from '../../components/Form/FormAjudador/FormAjudador'


export default props => (
    <React.Fragment>
        <Navbar/>
        <FormAjudador title = "Cadastro Ajudador"/>
        <Footer/>

    </React.Fragment>
)