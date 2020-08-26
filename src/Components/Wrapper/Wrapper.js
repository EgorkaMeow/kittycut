import React from 'react';
import './Wrapper.css';

import FormCut from '../FormCut/FormCut';

const Wrapper = (props) => {
    let layout = !props.is_page ? (
        <div className="wrapper">
            <div className="wrapper-content">
                <FormCut />
            </div>
        </div>
    ) : (
        <div className="wrapper">
            <div className="wrapper-content">
            </div>
        </div>
    )
    return layout;
}

export default Wrapper;