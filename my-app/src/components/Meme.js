import React from "react";

export default function Meme() {
    return (
          <main>
            <form className="form">
                <input type="text" placeholder="Top Text"className="form__input" />
                <input type="text" placeholder="Bottom Textg" className="form__input"/>
                <button className="form__button">Get a new meme image 🖼</button>
            </form>
            </main>
    )
}