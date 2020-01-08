import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas Principais
import Home from '../pages/Home/Home'
import TelaAcolhido from '../pages/TelaAjudador/TelaAjudador'
import TelaAjudador from '../pages/TelaAjudador/TelaAjudador'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tela_acolhido" component={TelaAcolhido} />
        <Route exact path="/tela_ajudador" component={TelaAjudador} />
        
    </Switch>
)