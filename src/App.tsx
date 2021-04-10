import React, { StrictMode } from 'react'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)


// global style
import './global.scss'

class App extends React.Component<any, any> {
    render() {
        return (
            <StrictMode>
                <h1>tyautyau56</h1>
            </StrictMode>
        )
    }
}

export default App
