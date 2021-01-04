import React, { FC } from 'react'
import Performance from './Performance'
import { PERFORMANCE_DETAILS } from './store'

const detail = PERFORMANCE_DETAILS

class PerformanceGallery extends React.Component<any, any> {
    render() {
        return (
            <div>
                {detail.map((obj) => {
                    return (
                        <Performance
                            id={obj.id}
                            image={obj.image}
                            name={obj.name}
                            description={obj.description}
                            url={obj.url}
                        />
                    )
                })}
            </div>
        )
    }
}

export default PerformanceGallery
