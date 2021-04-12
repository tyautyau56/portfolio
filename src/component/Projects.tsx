import React from 'react'

import Card from './Card'
import { PROJECTS_DETAIL } from './store/projectdetail'

const Projects = () => {
    return (
        <div>
            {PROJECTS_DETAIL.map((value, index) => {
                return <Card {...value} />
            })}
        </div>
    )
}

export default Projects
