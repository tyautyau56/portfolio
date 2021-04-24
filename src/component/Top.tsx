import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import icon from '/resources/icon.jpg'

const Top = () => {
    return (
        <div className='pt-16 p-8'>
            <div className='border-teal-100 border-solid border-4 shadow-xl rounded-xl md: h-auto text-center'>
                <div className='p-8'>
                    <img
                        src={icon}
                        alt='tyautyau56 icon'
                        className='h-32 w-32 rounded-full shadow-2xl mx-auto'
                    />
                    <div className='text-lg font-semibold text-teal-500 pt-4 text-2xl'>
                        tyautyau56
                    </div>
                    <div className='text-gray-500 font-light p-4 text-left'>
                        <ul>
                            <li>#kosen19s</li>
                            <li>17歳</li>
                            <li>徳山高専 情報電子工学科</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex'>
                            <li className='transform hover:scale-110 transition transform text-blue-400'>
                                <a
                                    href='https://twitter.com/tyautyau56'
                                    target='_blank'
                                    rel='noreferrer'>
                                    <FontAwesomeIcon
                                        icon={['fab', 'twitter']}
                                        className='fa-2x'
                                    />
                                </a>
                            </li>
                            <li className='transform hover:scale-110 transition transform text-gray-800'>
                                <a
                                    href='https://github.com/tyautyau56'
                                    target='_blank'
                                    rel='noreferrer'>
                                    <FontAwesomeIcon
                                        icon={['fab', 'github']}
                                        className='fa-2x'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top
