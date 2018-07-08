import React from 'react';
import Project1 from '../content/projects/projects/Project1';

export const routes = [
    {
        path: '/project1',
        exact: true,
        sidedrawer: () => <div>Project1</div>,
        main: () => <Project1 />
    }
]