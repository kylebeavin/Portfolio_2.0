import React from 'react';
import Project1 from '../content/projects/projects/Project1';
import Project2 from '../content/projects/projects/Project2';
import Project3 from '../content/projects/projects/Project3';
import Project4 from '../content/projects/projects/Project4';
import Project5 from '../content/projects/projects/Project5';
import Project6 from '../content/projects/projects/Project6';

export const routes = [
    {
        path: '/project1',
        exact: true,
        sidedrawer: () => <div>Project1</div>,
        main: () => <Project1 />
    },
    {
        path: '/project2',
        exact: true,
        sidedrawer: () => <div>Project2</div>,
        main: () => <Project2 />
    },
    {
        path: '/project3',
        exact: true,
        sidedrawer: () => <div>Project3</div>,
        main: () => <Project3 />
    },
    {
        path: '/project4',
        exact: true,
        sidedrawer: () => <div>Project4</div>,
        main: () => <Project4 />
    },
    {
        path: '/project5',
        exact: true,
        sidedrawer: () => <div>Project5</div>,
        main: () => <Project5 />
    },
    {
        path: '/project6',
        exact: true,
        sidedrawer: () => <div>Project6</div>,
        main: () => <Project6 />
    }
]