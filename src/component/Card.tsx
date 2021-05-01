import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    color: string
    name: string
    language: string
    url: string
    description: string
    children?: never
}

const Card: React.VFC<Props> = (props) => {
    return (
        <div className='p-4'>
            <div
                className={`w-96 h-56 m-auto rounded-xl shadow-2xl bg-gradient-to-r from-${props.color}-400 to-${props.color}-200 relative text-white`}>
                <div className='w-full px-8 absolute top-6'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-light'>Project Name</p>
                            <p className='text-lg font-medium tracking-tight'>
                                {`${props.name}`}
                            </p>
                        </div>
                        <div className='transform hover:scale-110 transition transform'>
                            <a
                                href={`${props.url}`}
                                target='_blank'
                                rel='noreferrer'>
                                <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                    className='fa-2x'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <p className='font-light'>Language</p>
                        <p className='text-lg font-medium tracking-widest'>
                            {`${props.language}`}
                        </p>
                    </div>
                    <div className='pt-6 pr-6'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-light text-xs'>
                                    Description
                                </p>
                                <p className='font-bold tracking-more-wider text-sm'>
                                    {`${props.description}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
