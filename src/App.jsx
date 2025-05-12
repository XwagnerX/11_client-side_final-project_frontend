import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState(null)
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      console.log('Iniciando petición GET a:', `${import.meta.env.VITE_API_URL}/Book#`)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Book`)
      const data = await response.json()
      console.log('Datos recibidos de la API:', {
        data: data
      })
      setBooks(data)
      setApiStatus('success')
    } catch (error) {
      console.error('Error en la petición GET:', {
        url: `${import.meta.env.VITE_API_URL}/Book`,
        error: error.message,
        stack: error.stack
      })
      setApiStatus('error')
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
