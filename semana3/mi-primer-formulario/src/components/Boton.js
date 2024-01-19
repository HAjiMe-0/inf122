import React from "react";
    
function Boton({funClick, text}) {
    return(
        <button onclick={funClick}>
        {text}
        </button>
    )

}
