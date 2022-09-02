import React from "react"
import styled from "styled-components"

const StyledGameMatchConatiner = styled.div`
display: flex;
border: 2px solid black;
>*{
    border:1px solid black;
}
`

export default function GameMatch({game}){
    const fractionRegex = "_([a-zA-Z0-9.-]*)_";
    let playerFractions = game.info.players[1].factions.map(fraction => fraction.match(fractionRegex)[1]);
    console.log(game.info.players[1].factions[0].match(fractionRegex)[1])
    return(
        <StyledGameMatchConatiner>
           
                
                <p>{game.info.game_mode}</p>
                
                <p>Game Result</p>
                {
                    playerFractions.map(fr => <p>{fr}</p>)
                }
                <h3>{game.info.players[1].game_outcome}</h3>
                
                <img src="https://dd.b.pvp.net/3_14_0/core/en_us/img/regions/icon-noxus.png"></img>
            
        </StyledGameMatchConatiner>
    )
}