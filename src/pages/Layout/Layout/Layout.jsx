import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
// import './layout.scss'

const Layout = () => (
    <div className="layout">
        <div className="layout__content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
)

export default Layout
