import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>UPS! Lo siento, no hemos encontrado la página que buscabas</h1>
        <Link to="/" className="volver-error">
            Volver
        </Link>
    </div>
  )
}

export default ErrorPage