import React, { StrictMode } from 'react'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// Component
import Content from './Content'
import Projects from './Projects'
import Top from './Top'

const App: React.VFC = () => {
    return (
        <StrictMode>
            <Top />
        </StrictMode>
    )
}

export default App
