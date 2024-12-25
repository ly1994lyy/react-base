import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import App from './App.tsx'
import '@unocss/reset/tailwind.css'

createRoot(document.getElementById('root')!).render(<App />)
