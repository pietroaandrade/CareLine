import { createRoot } from "react-dom/client"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
import './index.css'

const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)