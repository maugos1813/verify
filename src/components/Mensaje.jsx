import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getLinks } from '../services/linksServices'

export const Mensaje = () => {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data =  await getLinks()
        setLinks(data)
      } catch (error) {
        console.error('Error al obtener los enlaces', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLinks()
  }, [])

  return (
    <div className="text-center mt-10 mx-2 font-mono">
      <h2 className="text-green-400 text-2xl mb-4">
        {loading ? 'Cargando enlaces...' : 'Enlaces verificados:'}
      </h2>

      {!loading && links.length > 0 ? (
        <ul className="text-left inline-block">
          {links.map((link) => (
            <li key={link.id} className="text-blue-500 underline mb-1">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      ) : !loading && links.length === 0 ? (
        <p className="text-gray-500">No hay enlaces disponibles.</p>
      ) : null}
    </div>
  )
}
