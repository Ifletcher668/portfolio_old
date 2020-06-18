import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SplashPage from './components/SplashPage';
import { Router } from '@reach/router';
import Main from './components/main/Main';
import PageNotFound from './components/NotFound';
import Portfolio from './components/portfolio/Portfolio';

interface Props {}

const App: React.FC<Props> = (props: Props) => {
    return (
        <Router id='site-wrapper' className='root'>
            <SplashPage path='/welcome' />
            <Main path='/*' />
            <Portfolio path='developer/' />
            <PageNotFound default />
        </Router>
    );
};

export default App;
