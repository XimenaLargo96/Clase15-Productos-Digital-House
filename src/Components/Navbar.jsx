import React from 'react'
import { Link } from "react-router-dom";
import style from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={style.navContainer}>
      <button>
        <Link to="/products">Productos</Link>
      </button>
      <button>
        <Link to="/form">Agregar producto</Link>
      </button>
    </nav>
  )
}
