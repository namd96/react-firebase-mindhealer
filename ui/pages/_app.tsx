import React from 'react'
import GlobalState from '../src/global-state-manager/global-state'
import LayoutWrapper from '../src/modules/layout/layout-wrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return<GlobalState>
        <LayoutWrapper>
            <Component {...pageProps} /> 
        </LayoutWrapper>
    </GlobalState>
    
}

export default MyApp
