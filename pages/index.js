import React from 'react'
import Link from 'next/Link'
import useSWR from 'swr'

const Index = () => {
  const { data, error } = useSWR('/api/get-promo',)
  return (
    <React.Fragment>
      <p className="mt-12 text-center">
        O restaurante x sempre busca por atender melhor seus cliente<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="text-center my-12">
        <Link href='/pesquisa'>
          <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">Dar opinião ou sugestão</a>
        </Link>
        <p className="mt-12 text-center">
          Mensagem desconto.
      </p>
      </div>
    </React.Fragment >
  )
}


export default Index