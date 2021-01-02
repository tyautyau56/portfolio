import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// components
import App from './components/App'
import Header from './components/header'
import PerformanceGallery from './components/Performance/PerformanceGallery'

// global style
import './global.scss'

ReactDOM.render(
    <StrictMode>
        <Header />
        <div id="main">
            <section id="section_1" className="introduce">
                <h2>Self-Introduction</h2>
            </section>
            <section id="section_2" className="education">
                <h2>Education Background</h2>
            </section>
            <section id="section_3" className="performance">
                <h2>Recent Work</h2>
                <PerformanceGallery />
            </section>
        </div>
    </StrictMode>,
    document.getElementById('root')
)
