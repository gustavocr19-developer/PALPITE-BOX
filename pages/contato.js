import React from 'react'
import Link from 'next/link'

const Contato = () => {
  return (
    <React.Fragment>
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Contato;