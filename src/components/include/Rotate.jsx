import React from 'react'

const rotate = () => {
  return (
    <div className="rotate">
        <a href="https://github.com/KDB6" className="link">
            <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg"
                aria-labelledby="link1-title link1-desc">
                <title id="link1-title">view thank you</title>
                <desc id="link1-desc"></desc>

                <path id="link-circle" className="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    stroke="none" fill="none" />

                <path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115" fill="none" />

                <text className="link__text">
                    <textPath href="#link-circle" stroke="none">
                        &developer github view
                    </textPath>
                </text>
            </svg>
        </a>
    </div>
  )
}

export default rotate