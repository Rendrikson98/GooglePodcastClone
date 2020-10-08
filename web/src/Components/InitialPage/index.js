import React from 'react';

import Menu from '../Menu';
import Podcasts from '../Podcasts';

export default function InitialPage(){

    return(
        <div className='containerInitial'>
            <Menu />
            <Podcasts />
        </div>
    )
}