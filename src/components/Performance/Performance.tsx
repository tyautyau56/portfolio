import React from 'react'

class Performance extends React.Component<
    {
        id: any
        image: any
        name: any
        description: any
        url: any
    },
    any
> {
    render() {
        let { id, image, name, description, url } = this.props
        return (
            <div>
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
