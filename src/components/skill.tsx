import React, {FC} from 'react'

import TsIcon from '/resources/svg/typescript.svg'
import ReactIcon from '/resources/svg/react.svg'
import RustIcon from '/resources/svg/rust.svg'

import '../style/skill.scss'

const Skill: FC = () => {
    return (
        <div className="galleryIcon">
            <div className="icon">
                <TsIcon />
                <p>TypeScript</p>
            </div>
            <div className="icon">
                <ReactIcon />
                <p>React</p>
            </div>
            <div className="icon">
                <RustIcon />
                <p>Rust</p>
            </div>
        </div>
    )
}

export default Skill
