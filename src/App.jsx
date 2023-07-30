import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage/ProfilePage';
import HomePage from './pages/HomePage/HomePage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { HEADER_NAVIGATION, ROUTES } from './constants';

const App = () => (
    <div className='wrapper'>
        <Router>
            <Header navigationData={HEADER_NAVIGATION} />
            <Routes>
                <Route exact path={ROUTES.home} element={<HomePage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
            </Routes>
            <Footer />
        </Router>
    </div>
);

export default App;
