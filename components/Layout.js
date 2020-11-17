import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Konabos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          <Link href="/">
            <a>Konabos</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header h1 a {
          color: #000;
          text-decoration: none;
        }

        main {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a,
        a:visited {
          color: blue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}