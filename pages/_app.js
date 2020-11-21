import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css'
import Head from 'next/head'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Head>
          <title>Kailas Walldoddi</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}