import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PatientInfoProvider } from './AllInfoContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <PatientInfoProvider>
    <App />
    </PatientInfoProvider>

)
