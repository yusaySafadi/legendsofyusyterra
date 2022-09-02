import React from "react";
import styled from "styled-components";

const StyledGameMatchConatiner = styled.div`
color: #e2e1e1;
width: 50%;
  display: flex;
  border: 2px solid black;
  align-items: center;
  border-radius: 15px;
  > * {
    border: 1px solid black;
  }
background: ${props => props.outcome === "loss" ? "rgb(255,0,65)": "rgb(0,224,255)"};
background: ${props => props.outcome === "loss" ? 'linear-gradient(90deg, rgba(255,0,65,1) 0%, rgba(0,224,255,1) 100%)' 
: 'linear-gradient(90deg, rgba(0,224,255,1) 0%, rgba(255,0,68,1) 100%)'};
`;
const StyledFractionImage = styled.img`
width: 50px;
height: 50px;
`

export default function GameMatch({ game }) {
  const fractionRegex = "_([a-zA-Z0-9.-]*)_";
  let playerFractions = game.info.players[1].factions.map((fraction) =>
    fraction.match(fractionRegex)[1].toLowerCase()
  );
  let enemyFractions = game.info.players[0].factions.map((fraction) =>
    fraction.match(fractionRegex)[1].toLowerCase());
  return (
    <StyledGameMatchConatiner outcome={game.info.players[1].game_outcome}>
      <p>{game.info.game_mode}</p>

      <p>Game Result</p>

      <h3>{game.info.players[1].game_outcome}</h3>
      <div>
        <h3>Regions</h3>
        <div>
          {playerFractions.map((fr) => (
            <StyledFractionImage
              src={`https://dd.b.pvp.net/3_14_0/core/en_us/img/regions/icon-${fr}.png`}
            ></StyledFractionImage>
          ))}
        </div>
      </div>
      <h2>VS</h2>
      <div>
        <h3>Regions</h3>
        <div>
          {enemyFractions.map((fr) => (
            <StyledFractionImage
              src={`https://dd.b.pvp.net/3_14_0/core/en_us/img/regions/icon-${fr}.png`}
            ></StyledFractionImage>
          ))}
        </div>
      </div>

    </StyledGameMatchConatiner>
  );
}
