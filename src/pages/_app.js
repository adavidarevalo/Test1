import React from 'react'
import '../globalStyles.css'
import '../styles/components/Layout.css'
import '../styles/home.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
  }
  

  
  export default MyApp