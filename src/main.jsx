import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter-tight'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './styles.css'
import App from './App'
import Gallery from './components/Gallery'

const isGallery = window.location.pathname.replace(/\/+$/, '') === '/gallery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isGallery ? <Gallery /> : <App />}
  </React.StrictMode>
)
