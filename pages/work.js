import Head from 'next/head'
import Link from 'next/link'

export default function Work() {
  return (
    <>
      <h1>Work Page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}