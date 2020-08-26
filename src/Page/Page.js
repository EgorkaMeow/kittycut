import React from 'react';
import './Page.css';

import Header from '../Components/Header/Header';
import Wrapper from '../Components/Wrapper/Wrapper';


const Page = () => {
    return (
        <>
            <Header />
            <Wrapper is_page={true} />
        </>
    )
};

export default Page;