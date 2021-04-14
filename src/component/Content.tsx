import React from 'react'

const Content = () => {
    return (
        <div>
            <section>
                <article>
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
                <article>
                    <h2>Education Background</h2>
                    <ul>
                        <li>2019年 3月 周南市立須々万中学校卒業</li>
                        <li>
                            2019年 4月 徳山工業高等専門学校 情報電子工学科 入学
                        </li>
                        <li>
                            2019年〜現在 徳山工業高等専門学校 情報電子工学科
                            在学中
                        </li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Content
