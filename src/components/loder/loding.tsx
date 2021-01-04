import React, {FC} from 'react'

import '../../style/loding.scss'
import './loaded'

const Loder: FC = () => {
    return(
        <div id="loading">
            <div className="loader"></div>
        </div>
    )
}

export default Loder