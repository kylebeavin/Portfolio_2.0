import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Resources from './Resources';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/about',
      exact: true,
      sidebar: () => <div>About</div>,
      main: () => <About />
    },
    {
      path: '/projects',
      exact: true,
      sidebar: () => <div>Projects</div>,
      main: () => <Projects />
    },
    {
      path: '/contact',
      exact: true,
      sidebar: () => <div>Contact</div>,
      main: () => <Contact />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
]