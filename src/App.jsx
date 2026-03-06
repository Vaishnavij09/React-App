import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from "./components/ProductList";
import './App.css'
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <ProductList />
  </div>
  )
}

export default App;
