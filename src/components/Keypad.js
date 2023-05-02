// Code Keypad Component Here

import React from "react"

function Keypad (){

    function handleEvent(){
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={handleEvent} />
    )
}

export default Keypad;