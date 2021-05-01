import React from 'react'
import { Link } from 'react-router-dom'

const Menubar: React.VFC = () => {
    return (
        <div className='grid grid-cols-4 divide-x divide-dotted divide-teal-500'>
            <Link to='/'>Top</Link>
            <Link to='/skill'>Skill</Link>
            <Link to='/project'>Projects</Link>
            <Link to='/menu'>Menu</Link>
        </div>
    )
}

export default Menubar
