import React from 'react'

import icon from '/resources/icon.jpg'

const Top = () => {
    return (
        <div>
            <div className='w-48'>
                <img
                    src={icon}
                    alt='tyautyau56 icon'
                    className='h-32 w-32 rounded-full'
                />
                <div className='text-lg font-semibold text-teal-500'>
                    tyautyau56
                </div>
                <div className='text-gray-500 font-light'>
                    <ul>
                        <li>#kosen19s</li>
                        <li>17歳</li>
                        <li>徳山高専 情報電子工学科</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Top
