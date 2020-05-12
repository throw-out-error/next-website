import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Head>
				<title>throw out Error()</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<h1 className="title">
					<Link href="/home"><a>throw out Error()</a></Link>
				</h1>
			</header>

			<main>
				<p>
					Hello, world! Welcome to our website.
				</p>
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
