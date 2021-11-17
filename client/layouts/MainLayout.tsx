import React from "react";
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";
import Head from 'next/head'

interface MainLayoutProps {
    title?: string,
    description?: string,
    keywords?: string,

}
const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
            title,
            description,
            keywords
    }) => {
    return(
        <>
            <Head>
                <title>{title || 'Музыкальная платформа'}</title>
                <meta name={"description"} content={'Музыкальная платформа. На этой площадке каждый может загрузить свои любимые треки и все посетители могут их прослушать и прокомментировать.' + description}/>
                <meta name={"robots"} content={"index, follow"}/>
                <meta name={"keywords"} content={keywords || "Музыка, треки, актисты, слушать, онлайн"}/>
                <meta name={"viewport"} content={"width-device-width, initial-scale=1"}/>
            </Head>
            <Navbar/>
            <Container style={{margin:"90px 0"}}>
                {children}
            </Container>
            <Player/>
        </>
    )
}

export default MainLayout