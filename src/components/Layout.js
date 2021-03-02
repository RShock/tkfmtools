import React, { useState, useContext } from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { MainNavbar, Sidebar } from './Navbars';
import ToTopBtn from './ToTopBtn';
import { LanguageContext } from './LanguageProvider';
import langConfig from '../languangeConfig.json';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const Body = styled.div`
    min-height: 100vh;
    transition: background-color 0.3s ease;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onSurface};
`
const Main = styled.main`
    padding: 1rem;
`
export default function Layout({ children }) {
    const { userLanguage, isDefault, pageString } = useContext(LanguageContext)

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = (toOpen) => (event) => {
        if (
            (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) ||
            event.target.closest('.MuiAccordion-root') !== null &&
            event.target.closest('a') === null
        ) {
            return
        }
        setSidebarOpen(toOpen)
    }

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: userLanguage,
                }}
            >
                <meta charSet="utf-8" />
                <meta name="application-name" content="&nbsp;" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta name="msapplication-TileImage" content="/tkfmtools/mstile-144x144.png" />
                <meta name="msapplication-square70x70logo" content="/tkfmtools/mstile-70x70.png" />
                <meta name="msapplication-square150x150logo" content="/tkfmtools/mstile-150x150.png" />
                <meta name="msapplication-square310x310logo" content="/tkfmtools/mstile-310x310.png" />
                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
                <meta name="title" content={pageString.index.helmet.title} />
                <meta name="description" content={pageString.index.helmet.description} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={langConfig[userLanguage].ogLocale} />
                <meta property="og:title" content={pageString.index.helmet.title} />
                <meta property="og:description" content={pageString.index.helmet.description} />
                <meta property="og:url" content={`https://purindaisuki.github.io/tkfmtools/${isDefault ? null : userLanguage}`} />
                <meta property="og:image" content="https://purindaisuki.github.io/tkfmtools/website_preview.png" />
                <meta property="og:image:width" content="1358" />
                <meta property="og:image:height" content="756" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={pageString.index.helmet.title} />
                <meta property="twitter:description" content={pageString.index.helmet.description} />
                <meta property="twitter:url" content={`https://purindaisuki.github.io/tkfmtools/${isDefault ? null : userLanguage}`} />
                <meta property="twitter:image" content="https://purindaisuki.github.io/tkfmtools/website_preview.png" />
                <meta name="google-site-verification" content="F_IfmH-gHHQSs2j53dl-2l-zMqnWtwWOnfqdQiwLUow" />
                <title lang={userLanguage}>{pageString.index.helmet.title}</title>
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/tkfmtools/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/tkfmtools/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/tkfmtools/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/tkfmtools/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/tkfmtools/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/tkfmtools/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/tkfmtools/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/tkfmtools/apple-touch-icon-152x152.png" />
                <link rel="icon" type="image/png" href="/tkfmtools/favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="/tkfmtools/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/tkfmtools/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/tkfmtools/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/tkfmtools/favicon-128.png" sizes="128x128" />
                <link rel="manifest" href="/tkfmtools/manifest.json" />
            </Helmet>
            <Body>
                <MainNavbar
                    toggleSidebar={toggleSidebar}
                />
                <Sidebar
                    open={sidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <Main>
                    {children}
                </Main>
                <ToTopBtn />
            </Body>
        </>
    )
}
