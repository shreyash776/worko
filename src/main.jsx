import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ReferralProvider } from './context/ReferralContext';
import { LoggedInProvider } from './context/LoggedInContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
      <LoggedInProvider>
      <ReferralProvider>
      <App />
    </ReferralProvider>
      </LoggedInProvider>
  </React.StrictMode>,
)
