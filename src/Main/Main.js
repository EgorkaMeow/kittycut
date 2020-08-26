import React from 'react';
import './Main.css';

import Header from '../Components/Header/Header';
import Wrapper from '../Components/Wrapper/Wrapper';


const Main = () => {
    return (
        <>
            <Header />
            <Wrapper is_page={false} />
        </>
    )
};

export default Main;