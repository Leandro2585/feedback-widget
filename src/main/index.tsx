import React from 'react'
import ReactDOM from 'react-dom/client'
import { Widget } from '../application/components/widget'
import '../application/styles/global.css'

export const App = () => {
  return <Widget/>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
