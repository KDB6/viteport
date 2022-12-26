import React from 'react'

const Header = () => {
  return (
    <header id="header">
        <nav className="header">
            <div><a href="#">PORT</a></div>
            <div>
                <ul>
                    <li><a href="#web__main">web</a></li>
                    <li><a href="#javascript__main">javascript</a></li>
                    <li><a href="#front__main">react&vue</a></li>
                    <li><a href="#php__main">php</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header