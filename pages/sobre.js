import React from 'React'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Sobre