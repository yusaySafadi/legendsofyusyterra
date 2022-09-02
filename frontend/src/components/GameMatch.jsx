import React from "react";
import styled from "styled-components";

const StyledGameMatchConatiner = styled.div`
  display: flex;
  border: 2px solid black;
  align-items: center;
  border-radius: 15px;
  > * {
    border: 1px solid black;
  }
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
  console.log(game.info.players[1].factions[0].match(fractionRegex)[1]);
  return (
    <StyledGameMatchConatiner>
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

    </StyledGameMatchConatiner>
  );
}
