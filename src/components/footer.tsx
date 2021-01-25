import React, { FC } from 'react'

import '../style/footer.scss'

const setFooter: FC = () => {
    return (
        <section className='footer'>
            <div className='inner'>
                <p>
                    &copy; 2020{' '}
                    <a
                        href='https://github.com'
                        target='_blank'
                        rel='noreferrer'
                        className='footer_a'>
                        tyautyau56
                    </a>
                </p>
            </div>
        </section>
    )
}

export default setFooter
