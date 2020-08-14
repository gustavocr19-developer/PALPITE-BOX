import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout/index'

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}
export default MyApp