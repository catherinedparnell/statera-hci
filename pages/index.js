import Head from 'next/head'
import Home from '../components/home'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Statera</title>
        <meta name="description" content="A bot designed to help manage your time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-navy">
          <Home />
        </div>
      </main>
    </div>
  )
}
