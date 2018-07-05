import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Projex from './Projex';
import Contact from './Contact';

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
      path: '/projex',
      exact: true,
      sidebar: () => <div>Projex</div>,
      main: () => <Projex />
    },
    {
      path: '/contact',
      exact: true,
      sidebar: () => <div>Contact</div>,
      main: () => <Contact />
    }
]