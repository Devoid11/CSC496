import * as React from 'react'

//import useDarkMode from './useDarkMode'
import useTheme from '../hooks/useTheme'

import { Link, useStaticQuery, graphql, navigate } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

//Transconimports
import { css } from '@emotion/core';
import { TransitionContext } from './layout';



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

    //PageTrans
      
    //</>pageTrans


  <div className={container} style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>

        <button type="button" onClick={toggleTheme}>
          Switch theme
        </button>

        
      

      //transcon
      <TransitionContextProvider>
      <div
        style={{
          margin: `0 auto`,
          minHeight: 0,
        }}
      >
        <main
          style={{
            overflowY: 'scroll',
            overflowX: 'hidden',
            height: '100vh',
            minHeight: 0,
          }}
        >
          {children}
        </main>
      </div>
      <PageTransition />
      </TransitionContextProvider>
      //transcon





        <nav>
          <ul className={navLinks}>

            <li className={navLinkItem}>
              <Link to="/" className={navLinkText} style={{
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
              <Link to="/oldblog" className={navLinkText} style={{
                background: theme === 'dark' ? '#000' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
              }}>
                Blog
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/pokemon" className={navLinkText} style={{
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

//pagetransComponent
const PageTransition = () => {
  const { transition } = useContext(TransitionContext);
  const [playState, setPlayState] = useState(transition);

  useEffect(() => {
    setPlayState(transition);
  }, [transition]);

  return (
    <AnimatePresence>
      {playState && (
        <motion.div
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          aria-hidden={true}
          css={css`
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 11;
            pointer-events: none;
            transform-origin: left;

            > div {
              height: 25vh;
              margin-top: -5vh;
              width: 100vw;
              background-color: #3466bf;
              transform-origin: right;
            }
            > figure {
              position: fixed;
              top: calc(50% - 8rem);
              left: calc(50% - 8rem);
              transform-origin: center;
              width: 16rem;
              height: 16rem;
              z-index: 12;
              padding: 0;
              margin: 0;
              svg {
                width: 100%;
                height: 100%;
              }
            }
          `}
        >
          <motion.div variants={childVariants} exit={'visible'} key={0}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={1}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={2}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={3}>
            {' '}
          </motion.div>
          <motion.div variants={childVariants} exit={'visible'} key={4}>
            {' '}
          </motion.div>
          <motion.figure variants={childVariantHead} exit={'visible'} key={5}>
            <HeadLogo />
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
//transconProvider
//export const TransitionContext = React.createContext(undefined);

export const TransitionContextProvider = props => {
  const [transition, setTransition] = useState(true);

  return (
    <TransitionContext.Provider
      value={{
        transition: transition,
        setTransition: setTransition,
      }}
    >
      {props.children}
    </TransitionContext.Provider>
  );
};

//FramerMotion
export const parentVariants = {
  visible: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  hidden: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const childVariants = {
  visible: {
    scaleX: 1,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
  hidden: {
    scaleX: 0,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
};

export const childVariantHead = {
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 1.2,
    },
  },
  hidden: {
    scale: 0,
    rotate: 15,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.4,
    },
  },
};
//</>framer motion


/*
export const parentVariants = {
  visible: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  hidden: {
    transition: {
      ease: 'circInOut',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};


export const childVariants = {
  visible: {
    scaleX: 1,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
  hidden: {
    scaleX: 0,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
};

export const childVariantHead = {
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 1.2,
    },
  },
  hidden: {
    scale: 0,
    rotate: 15,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.4,
    },
  },
};
*/
const transitionStyles = css`
  color: #d8cf25;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  font-weight: bold;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`;

export const TLink = props => {
  const { to, children, styles } = props;
  const { setTransition } = useContext(TransitionContext);

  return (
    <Link
      to={to}
      title={to === '/' ? 'Home' : to.replace(/\//g, ' ')}
      css={[transitionStyles, styles]}
      onClick={e => {
        e.preventDefault();

        setTransition(false);
        setTimeout(() => {
          navigate(to);
        }, 1800);
      }}
    >
      {children}
    </Link>
  );
};


export default Layout