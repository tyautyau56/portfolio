import React, { StrictMode } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// Component
import Top from './Top'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'

const App: React.VFC = () => {
    return (
        <StrictMode>
            <div className='md:flex'>
                <Top />
                <Router>
                    <Route exact path='/' component={About} />
                    <Route path='/skill' component={Skill} />
                    <Route path='/project' component={Projects} />
                </Router>
            </div>
        </StrictMode>
    )
}

export default App
