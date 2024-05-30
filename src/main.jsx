import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CommentsProvider } from './contexts/CommentsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>,
)
