import Head from 'next/head'
import React from 'react'

import Router from 'next/router'

export default class Home extends React.Component {
	componentDidMount() {
		setTimeout(() => Router.push('/home'), 5000)
	}
	render() {
		return (
			<div className="container">
				<Head>
					<title>throw out Error()</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>
					<h2 className="error">An error has occurred. Please wait to be redirected...</h2>
				</main>
			</div>
		)
	}
}
