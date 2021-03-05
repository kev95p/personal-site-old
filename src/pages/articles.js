import React from "react"
import Header from '../components/header'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

export default function Articles() {
  return (
  <ThemeProvider theme={theme}>
    <Header></Header>
  </ThemeProvider>
  )
}