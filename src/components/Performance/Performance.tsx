import React from 'react'

import './peformance.scss'

interface propType {
    id: number,
    image: string,
    name: string,
    description: string,
    url: string
}

class Performance extends React.Component<propType, any> {
    render() {
        let { id, image, name, description, url } = this.props
        return (
            <div className='gallery'>
                <article key={id}>
                    <a href={url} target='_blank' rel='noreferrer'>
                        <img src={image} alt={name} />
                    </a>
                    <h3>
                        <a href={url} target='_blank' rel='noreferrer'>
                            {name}
                        </a>
                    </h3>
                    <p>{description}</p>
                </article>
            </div>
        )
    }
}

export default Performance
