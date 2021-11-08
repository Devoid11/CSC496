import * as React from 'react'

//import useDarkMode from './useDarkMode'
import useTheme from '../hooks/useTheme'

import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { theme, toggleTheme } = useTheme();

  return (

    
    <div className={container} style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
      

      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
      
      <nav>
        <ul className={navLinks}>
          
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
              Home
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
              About
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/oldblog" className={navLinkText}style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
            Blog
            </Link>
          </li>
          
          <li className={navLinkItem}>
            <Link to="/pokemon" className={navLinkText}style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
            Pokemon
            </Link>
          </li>

        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout