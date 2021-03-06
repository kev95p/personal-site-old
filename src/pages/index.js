import React from "react"
import Header from '../components/header'
import Profile from '../components/profile'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'


export default function Home(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>kev95p - Home</title>
        <link rel="canonical" href="https://kev95p.github.io/personal-site" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header {...props}></Header>
        <Profile></Profile>
      </ThemeProvider>
    </>
  )
}
