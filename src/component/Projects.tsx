import React from 'react'

import Card from './Card'
import { PROJECTS_DETAIL as pj_detail } from './store/projectdetail'

const Projects: React.VFC = () => {
    return (
        <div className='min-h-screen flex justify-center flex-wrap'>
            {pj_detail.map((value, index) => {
                return <Card {...value} key={index} />
            })}
        </div>
    )
}

export default Projects
