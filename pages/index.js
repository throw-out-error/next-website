import Head from 'next/head'

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>throw out Error()</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<h1 className="title">
					<a href="/">throw out Error()</a>
				</h1>
			</header>

			<main>
				<h2>Welcome to our website.</h2>
			</main>

			<footer>
				Designed By <a href="https://theoparis.com/about" target="_blank" rel="noopener noreferrer">
					Theo Paris
				</a> & Powered By
				<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"> Next.js
				</a>.
			</footer>
		</div>
	)
}
