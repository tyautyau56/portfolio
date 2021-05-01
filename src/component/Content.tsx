import React from 'react'

type Props = {
    title: string
    children?: React.ReactNode
}

const Content: React.VFC<Props> = (prop) => {
    return (
        <div className='pt-16 p-8'>
            <div className='border-teal-100 border-4 rounded-xl shadow-xl p-4'>
                <h2 className='font-medium text-gray-600 text-3xl p-4'>
                    {`${prop.title}`}
                </h2>
                <hr />
                {prop.children}
            </div>
        </div>
    )
}

export default Content
