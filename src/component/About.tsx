import React from 'react'

import Link from './Link'

const About = () => {
    return (
        <div className='pt-16 pl-8 pr-8'>
            <div className='border-teal-400 border-solid border-4 rounded-xl p-4 bg-white'>
                <h2 className='font-medium text-gray-600 text-3xl p-4'>
                    About
                </h2>
                <hr />
                <section>
                    <article className='p-4'>
                        <h2 className='font-medium text-2xl text-gray-600'>
                            Self-Introduction
                        </h2>
                        <p className='font-light text-gray-500 p-4'>
                            Web開発やドラムをしている高専生です.いつもはNITTCの同学年でやっている
                            <Link url='https://github.com/tokuyama-it'>
                                ITをむさぼる会
                            </Link>
                            で活動中. TypeScriptとRustを勉強中です.
                        </p>
                    </article>
                    <article className='p-4'>
                        <h2 className='font-medium text-2xl text-gray-600'>
                            Education Background
                        </h2>
                        <ul className='font-light text-gray-500 p-4'>
                            <li>2019年 3月 周南市立須々万中学校卒業</li>
                            <li>
                                2019年 4月 徳山工業高等専門学校 情報電子工学科
                                入学
                            </li>
                            <li>
                                2019年〜現在 徳山工業高等専門学校 情報電子工学科
                                在学中
                            </li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default About
