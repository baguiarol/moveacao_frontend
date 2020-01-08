import React from 'react'
import './Home.scss'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Banner, BannerItem } from '../../components/Banner'
import { CardRecentActivities, RecentActivities } from '../../components/RecentActivities'


const quality = 25

const img_aleatoria_2x = `https://res.cloudinary.com/moveacao-com-br/image/upload/c_scale,w_${window.innerWidth}/v1578411436/sample.jpg`

const img_aleatoria_mobile = `https://res.cloudinary.com/moveacao-com-br/image/upload/q_${quality}/v1578411436/sample.jpg`


//const cartaz_ssd_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557499536/sorteio_ssd_mobile_xo2wci.png`

const cartaz_minicurso_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458232/cartaz_minicurso_2x_lqqitm.png`

const cartaz_minicurso_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557499934/minicurso_mobile_jgyhju.png`

const code = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458245/code_jofkpn.jpg`
const integrapet = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557539577/IntegraPET_f0flv2.jpg`

//const doapet = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1577223926/DoacaoPET_duzt8c.jpg`






export default props => (
    <React.Fragment>
        <Navbar/>
        <Banner>
            <BannerItem active urlImgs={[
                { src: img_aleatoria_2x, size: 768 },
                { src: img_aleatoria_mobile }
            ]}
                url='/'
                subtitle= "Uma plataforma de ajudar nossos amigos imigrantes e refugiados"
                title= "Site Moveação" />

            <BannerItem urlImgs={[
                { src: img_aleatoria_2x, size: 768 },
                { src: img_aleatoria_mobile }
            ]}
                url='/'
                subtitle= "Uma plataforma de ajudar nossos amigos imigrantes e refugiados"
                title= "Site Moveação"/>

            <BannerItem urlImgs={[
                    { src: img_aleatoria_2x, size: 768 },
                    { src: img_aleatoria_mobile }
                ]}
                url='/'
                subtitle= "Uma plataforma de ajudar nossos amigos imigrantes e refugiados"
                title= "Site Moveação"/>
        </Banner>

        <RecentActivities>
            <CardRecentActivities title="Ajude os acolhidos oferecendo serviços."
                url='/tela_ajudador'
                urlImg={img_aleatoria_2x}
                textButton="Quero Ajudar" />

            <CardRecentActivities title="Conheça as oportundades que são oferecido aos acolhidos."
                url='/tela_acolhido'
                urlImg={img_aleatoria_2x}
                textButton="Oportunidades" />

            <CardRecentActivities title="Você pode doar recursos para ajudar os acolhidos em sua renda."
                url='/'
                urlImg={img_aleatoria_2x}
                textButton="Doações" />
            {/*<CardRecentActivities title="PET solidario"
                url='/'
                description={'O PET Computação junto com os demais PETs da UFAM, está arrecadando alimentos e coisas de higiene basica para instutições: Moacyr Alves e A Casa do Idoso.'}
                urlImg={doapet}
                textButton="Ver Mais" />*/}
        </RecentActivities>

        <Footer/>
    </React.Fragment>
)