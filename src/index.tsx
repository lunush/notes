import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import 'normalize.css'
import 'github-markdown-css/github-markdown.css'
import App from './App'
import { register } from './serviceWorker'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

register(null)
