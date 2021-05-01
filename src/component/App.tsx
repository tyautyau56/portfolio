import React, { StrictMode } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// Component
import Menubar from './Menubar'
import Top from './Top'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'

const App: React.VFC = () => {
    return (
        <StrictMode>
            <div className="bg-gray-800">
                <div className='md:flex'>
                    <Top />
                    <Router>
                        <Route exact path='/' component={About} />
                        <Route path='/skill' component={Skill} />
                        <Route path='/project' component={Projects} />
                        <Route path="/menu" component={Menubar} />
                    </Router>
                </div>
            </div>
        </StrictMode>
    )
}

export default App
