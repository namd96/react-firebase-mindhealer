import React from 'react'
import GlobalState from '../src/global-state-manager/global-state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <GlobalState>  <Component {...pageProps} /> </GlobalState>
}

export default MyApp
