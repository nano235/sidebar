import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { socials, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen} = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <div className="logo">Nano</div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          const {id, url, text, icon} = link
          return (
            <li key={id}>
              <Link to={url} >
                {icon}
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {socials.map(social => {
          const {id, url, icon} = social
          return <li key={id}>
            <Link to={url}>
              {icon}
            </Link>
          </li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
