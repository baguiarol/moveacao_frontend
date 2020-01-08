import React from 'react'
import './Logo.scss'

const logo = `https://res.cloudinary.com/moveacao-com-br/image/upload/v1578411723/logomoveacao_wwn1lj.jpg`

export default props => {
    return (
        <div id="logoTop" className="logo">
            <a href="/tela_acolhido">
                <img src={logo} alt={'logo'} />
            </a>
        </div>
    )
}