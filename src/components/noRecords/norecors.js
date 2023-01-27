import React from 'react'
import './norecords.css'

import norecord from '../../assets/norecord.png';

function NoRecords() {
    return (
        <div className='notFound_sec'>
                    <img src={norecord} alt='norecords' />
                    <h3>Products Not Found!</h3>
                    <p>Try Different...</p>
                </div>
    )
}

export default NoRecords;
