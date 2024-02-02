import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { resData } from './utils/mockData';
import { RES_IMGAGE_URL } from './utils/constants';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Main resData={resData} URL={RES_IMGAGE_URL} />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);