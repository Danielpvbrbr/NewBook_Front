import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles.js'
import App from './App.jsx'
import { AuthProvider } from "./Context/AuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
)
