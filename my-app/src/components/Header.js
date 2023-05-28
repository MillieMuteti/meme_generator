import React from 'react'

export default function Header () {
    return (
        <header className='navbar'>
            <img src={require("../images/troll-face.png")} alt=' ' className='header__image'/>
            <h1 className='header__title'>Meme Generator</h1>
            <p className='header__text'>React Course-Project 3</p>
        </header>
    )
}