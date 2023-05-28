import React from "react";
import memesData from "../memesData"

export default function Meme() {
    function handleClick() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        }
        
   
    return (
          <main>
            <div className="form">
                <input type="text" placeholder="Top Text"className="form__input" />
                <input type="text" placeholder="Bottom Text" className="form__input"/>
                <button className="form__button" onClick={handleClick}>
                    Get a new meme image 🖼
                    
                    </button>
            </div>
            </main>
    )
}