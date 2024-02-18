import React from "react"
import { createRoot } from "react-dom/client"
import App from './App'
import './css/main.css'

const app = createRoot(document.getElementById("root"))
app.render(<App />)
