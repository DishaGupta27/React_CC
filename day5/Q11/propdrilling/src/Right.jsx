import React from 'react';
import BottomMainRight from './BottomMainRight';

function Right({ name }) {
    return (
        <div>
            <h3>Right Component</h3>
            <BottomMainRight name={name} />
        </div>
    );
}

export default Right;
