import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import UserAccount from './components/UserAccount/UserAccount';

const navigation = {
    mainNav: [
        {
            type: 'pseudoLink',
            title: 'Тренування',
            href: 'training',
        },
        {
            type: 'pseudoLink',
            title: 'Тренери',
            href: 'trainers',
        },
        {
            type: 'pseudoLink',
            title: 'FAQ',
            href: 'FAQ',
        },
        {
            type: 'link',
            title: 'Мій кабінет',
            href: '/profile',
        },
    ],
};

function App() {
    return (
        <div className='wrapper'>
            <Router>
                <Header data={navigation} />
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    <Route path='/profile' element={<UserAccount />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
