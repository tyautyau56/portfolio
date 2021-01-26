// TODO: Complete the header.
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/header.scss'

const setHeader: FC = () => (
    <section className='section_header'>
        <div className='wrapper'>
            <img
                src='/resources/icon.png'
                alt="tyautyau56's avatar"
                className='icon'
            />
            <h1 className='title'>tyautyau56</h1>
            <div className="badge">
                <img src="https://img.shields.io/badge/age-17-9cf.svg?style=for-the-badge" alt="age"/>
                <img src="https://img.shields.io/badge/Occupation-student-success.svg?style=for-the-badge" alt="occupation"/><br/>
                <img src="https://img.shields.io/badge/OS-macOS-critical.svg?style=for-the-badge" alt="os"/>
                <img src="https://img.shields.io/badge/Apple-respect-orange.svg?style=for-the-badge&logo=Apple" alt="apple"/>
                <img src="https://img.shields.io/badge/editor-webstorm-ff69b4.svg?style=for-the-badge" alt="editor"/>
            </div>
            <ul>
                <li>
                    <a
                        href='https://twitter.com/tyautyau56'
                        target='_blank'
                        rel='noreferrer'>
                        <FontAwesomeIcon
                            icon={['fab', 'twitter']}
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
                            icon={['fab', 'github']}
                            className='fa-2x github'
                        />
                    </a>
                </li>
            </ul>
            <a href='#main'>
                <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} className="fa-2x arrow-icon" />
            </a>
        </div>
    </section>
)

export default setHeader
