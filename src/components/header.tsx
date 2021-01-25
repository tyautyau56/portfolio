// TODO: Complete the header.
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/header.scss'

const setHeader: FC = () => (
    <section className='section_header'>
        <div className='wrapper'>
            <img
                src='../../resources/icon.png'
                alt="tyautyau56's avatar"
                className='icon'
            />
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
            <a href='#main'>
                <FontAwesomeIcon icon={['fas', 'arrow-down']} />
            </a>
        </div>
    </section>
)

export default setHeader
