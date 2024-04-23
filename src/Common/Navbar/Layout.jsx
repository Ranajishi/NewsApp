import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from './Navbarr'

const Layout = () => {
  return (
    <div>
        <Navbarr />      
        <Outlet />

    </div>
  )
}

export default Layout
