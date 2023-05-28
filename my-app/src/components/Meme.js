import React from "react";

export default function Meme() {
    return (
          <div className="meme__form">
            <form>
                <input type="text" placeholder="Shut up" />
                <input type="text" placeholder="and take my money" />
                <input type="submit" value="Get new meme image" />
            </form>
          </div>
    )
}