import React, { FC } from 'react'

import '../../style/loding.scss'
import './loaded'

const Loder: FC = () => {
    return (
        <div id='loading'>
            <div className='loader' />
        </div>
    )
}

export default Loder
