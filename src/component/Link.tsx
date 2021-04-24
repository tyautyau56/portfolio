import React from 'react'

type Prop = {
    url: string
    children?: React.ReactNode
}

const Link: React.VFC<Prop> = (prop) => {
    return (
        <a
            href={prop.url}
            target='_blank'
            rel='noreferrer'
            className='no-underline border-dotted border-b-2 border-teal-500'>
            {prop.children}
        </a>
    )
}

export default Link
