import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => setCart((prev) => [...prev, product])

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '1rem',
        background: isDarkMode ? '#1a1a1a' : '#ffffff',
        color: isDarkMode ? '#f5f5f5' : '#111111'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Filter products, add them to your cart, and switch themes.</p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((prev) => !prev)}
      />

      <div>
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList category={category} onAddToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App