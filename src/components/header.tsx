// TODO: Complete the header.
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/header.scss'

const setHeader: FC = () => (
    <header>
        <div className='wrapper'>
            <h1 className='title'>tyautyau56</h1>
            <ul>
                <li>
                    <a
                        href='https://twitter.com/tyautyau56'
                        target='_blank'
                        rel='noreferrer'>
                        <FontAwesomeIcon
                            icon={['fab', 'twitter-square']}
                            className='fa-2x twitter'
                        />
                    </a>
                </li>
                <li>
                    <a
                        href='https://github.com/tyautyau56'
                        target='_blank'
                        rel='noreferrer'>
                        <FontAwesomeIcon
                            icon={['fab', 'github-square']}
                            className='fa-2x github'
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon icon={['fas', 'arrow-down']} />
        </div>
    </header>
)

export default setHeader
