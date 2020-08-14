import React from 'react';
import Link from 'next/link'

const Pesquisa = () => {
  return (
    <React.Fragment>
      <div className='pt-6'>
        <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
        <p className='text-center mb-6'>
          O restaurante X sempre busca por atender melhor seus clientes. <br />
          Por isso, estamos sempre abertos a ouvir sua opnião.
        </p>
        <div className='w-1/5 mx-auto'>
          <label className='font-bold'>Seu nome:</label>
          <input className="p-4 block w-full shadow bg-blue-200 my-2 rounded" type="text" />
          <label className='font-bold'>E-mail:</label>
          <input className="p-4 block w-full shadow bg-blue-200 my-2 rounded" type="text" />
          <label className='font-bold'>Whatsapp:</label>
          <input className="p-4 block w-full shadow bg-blue-200 my-2 rounded" type="text" />
          <label className='font-bold'>Sua crítica ou sugestão:</label>
          <input className="p-4 block w-full shadow bg-blue-200 my-2 rounded" type="text" />
        </div>

      </div>
    </React.Fragment>
  )
}

export default Pesquisa