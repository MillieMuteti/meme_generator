import React from "react";
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemesImages, setAllMemeImages] = React.useState(memesData)

    

        function getMemeImage() {
        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
        }
  
    return (
          <main>
            <div className="form">
                <input type="text" placeholder="Top Text"className="form__input" />
                <input type="text" placeholder="Bottom Text" className="form__input"/>
                <button className="form__button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                    
                    </button>
            </div>
            <img src= {meme.randomImage} alt="" className="memeImage"/>
            </main>
    )
}