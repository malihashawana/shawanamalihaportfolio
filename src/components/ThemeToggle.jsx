import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
