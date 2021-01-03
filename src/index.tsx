import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// components
import Header from './components/header'
import PerformanceGallery from './components/Performance/PerformanceGallery'
import Loder from './components/loding'

// global style
import './global.scss'

ReactDOM.render(
    <StrictMode>
        <Header />
        <div id='main'>
            <section id='section_1' className='introduce'>
                <h2>Self-Introduction</h2>
                <p>
                    web開発やドラムをしている高専生です.いつもはNITTCの同学年でやっている
                    <a href='https://github.com/tokuyama-it' target='_blank' rel="noreferrer">
                        ITをむさぼる会
                    </a>
                    で活動をしています. TypeScriptとRustを勉強中です.
                </p>
            </section>
            <section id='section_2' className='education'>
                <h2>Education Background</h2>
                <ul>
                    <li>2019年 3月 周南市立須々万中学校卒業</li>
                    <li>2019年 4月 徳山工業高等専門学校 情報電子工学科 入学</li>
                    <li>
                        2019年〜現在 徳山工業高等専門学校 情報電子工学科 在学中
                    </li>
                </ul>
            </section>
            <section id='section_3' className='performance'>
                <h2>Recent Work</h2>
                <PerformanceGallery />
            </section>
        </div>
    </StrictMode>,
    document.getElementById('root')
)
