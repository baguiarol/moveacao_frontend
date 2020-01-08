import React from 'react'
import './Footer.scss'
//import { Logo } from '../Logo'

//const logo = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557458249/pet_comp_logo_gjra5s.svg`

export default props => (
    <footer className="footer container-fluid px-5 py-8">
        <div className='row justify-content-around grid-container'>
            <div className='m-3'>
                <h4><strong>Fale com a gente! Nosso Email</strong></h4>
                <div className='links d-flex justify-content-center'>
                    <h6>moveacao@gmail.com</h6>
                </div>
            </div>

            <div className='m-3'>
                <h4><strong>Fale com a gente!</strong></h4>
                <div className='links d-flex justify-content-center'>
                    <h6>Instagram</h6>
                </div>
            </div>
        </div>

        <div className='row mt-5 justify-content-around grid-container'>
            <div className='m-3 text-center text-sm-right right'>
                <h6>Todos Direitos Reservados &copy;</h6>
            </div>
        </div>
    </footer>
)