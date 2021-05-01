import React from 'react'

import Card from './Card'
import { PROJECTS_DETAIL as pj_detail } from './store/projectdetail'

const Projects: React.VFC = () => {
    return (
        <div className='pt-16 p-8'>
            <div className='border-teal-100 border-4 rounded-xl shadow-xl p-4'>
                <h2 className='font-medium text-gray-600 text-3xl p-4'>
                    Projects
                </h2>
                <hr />
                <div className='flex justify-center flex-wrap'>
                    {pj_detail.map((value, index) => {
                        return <Card {...value} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
