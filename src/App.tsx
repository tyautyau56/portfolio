import React, { StrictMode } from 'react'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="min-h-screen flex justify-center items-center">
                Weather Application
            </div>
        )
    }
}

export default App
