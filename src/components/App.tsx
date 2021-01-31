import React, { StrictMode } from 'react'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// components
import Header from '../components/header'
import PerformanceGallery from '../components/Performance/PerformanceGallery'
import Footer from '../components/footer'
import Skill from '../components/skill'

// global style
import '../global.scss'

class App extends React.Component<any, any> {
    render() {
        return (
            <StrictMode>
                <Header />
                <div id='main'>
                    <section id='section_1' className='introduce'>
                        <article className='wrapper'>
                            <h2>Self-Introduction</h2>
                            <p>
                                web開発やドラムをしている高専生です.いつもはNITTCの同学年でやっている
                                <a
                                    href='https://github.com/tokuyama-it'
                                    target='_blank'
                                    rel='noreferrer'>
                                    ITをむさぼる会
                                </a>
                                で活動中. TypeScriptとRustを勉強中です.
                            </p>
                        </article>
                        <article className='wrapper'>
                            <h2>Education Background</h2>
                            <ul>
                                <li>2019年 3月 周南市立須々万中学校卒業</li>
                                <li>
                                    2019年 4月 徳山工業高等専門学校
                                    情報電子工学科 入学
                                </li>
                                <li>
                                    2019年〜現在 徳山工業高等専門学校
                                    情報電子工学科 在学中
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section id='section_2' className='skill'>
                        <article className='wrapper'>
                            <h2>Skill</h2>
                            <Skill />
                        </article>
                    </section>
                    <section id="section_3" className="performance">
                        <article className="wrapper">
                            <h2>Recent Work</h2>
                            <PerformanceGallery />
                        </article>
                    </section>
                </div>
                <Footer />
            </StrictMode>
        )
    }
}

export default App
