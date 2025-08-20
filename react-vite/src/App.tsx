import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Variaveis de ambiente
  console.log(import.meta.env.MODE) // Exibe o modo atual (development, production, etc.)
  console.log(import.meta.env.BASE_URL) // Exibe a URL base do projeto
  console.log(import.meta.env.PROD) // Exibe se está em produção (true ou false)
  console.log(import.meta.env.DEV) // Exibe se está em desenvolvimento (true ou false)
  console.log(import.meta.env.SSR) // Exibe se está em modo SSR (Server-Side Rendering)

  // Variaveis de ambiente personalizadas
  console.log(import.meta.env.VITE_API_URL) // Exibe a URL da API definida
  console.log(import.meta.env.DB_PASSWORD) // Exibe a senha do banco de dados definida

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
