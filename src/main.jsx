
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './NewHook.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
</BrowserRouter>
)
