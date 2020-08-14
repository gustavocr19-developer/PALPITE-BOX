import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-700 p-4">
        <div className='container mx-auto text-center font-bold text-white'>
          Projeto desenvolvido por: {' '}
          <a href="https:/google.com" className="hover:underline" >Gustavo Rodrigues</a> / {' '}
          <a href="https:/google.com" className="hover:underline" >Linkedin</a> / {' '}
          <a href="https:/google.com" className="hover:underline" >Github</a> {' '}
        </div>
        <div className="mt-2 mx-auto text-center">
          <img className="inline p-4" src='/logo_semana_fsm.png' />
          <img className="inline p-4" src='/logo_devpleno.png' />
        </div>
      </div>
    </React.Fragment >
  );
}

export default Footer