import React, { useState } from 'react'
import { getLinks } from '../services/linksServices'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleVerificar = async () => {
    try {
      const links = await getLinks()
      const existe = links.some(link => link.url === inputValue)

      if (existe) {
        setMensaje('✅ El enlace está verificado.')
      } else {
        setMensaje('❌ El enlace no está verificado, ten mucho cuidado.')
      }
    } catch (error) {
      console.error('Error al verificar enlace', error)
      setMensaje('⚠️ Error al verificar el enlace.')
    }
  }

  return (
    <div>
      <h2 className='font-semibold mt-5 ml-[10%]'>Ingresar enlace:</h2>
      <div className='flex justify-center'>
        <input
          type="search"
          placeholder='Enlace...'
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='bg-white text-black rounded-2xl p-2 mt-5 w-[80%]'
        />
      </div>
      <div className='flex justify-center items-center'>
        <button
          onClick={handleVerificar}
          className='border p-2 rounded-2xl mt-5 cursor-pointer hover:bg-gray-500'
        >
          Verificar
        </button>
      </div>

      {mensaje && (
        <p className='text-center mt-4 text-lg font-mono'>
          {mensaje}
        </p>
      )}
    </div>
  )
}
