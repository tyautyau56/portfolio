import React from 'react'

import '../style/loding.scss'

class Loder extends React.Component<any, any> {
    componentDidMount() {
        const loader: any = document.getElementById('#loading')
        loader.classList.add('loaded')
    }

    render() {
        return (
            <div id='loading'>
                <div className='loader' />
            </div>
        )
    }
}

export default Loder
