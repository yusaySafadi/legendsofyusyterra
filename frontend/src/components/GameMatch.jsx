import React from "react";
import styled from "styled-components";

const StyledGameMatchConatiner = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e2e1e1;
  width: 50%;
  border: 2px solid black;
  border-radius: 15px;
  background: ${(props) =>
    props.outcome === "loss" ? "rgb(255,0,65)" : "rgb(0,224,255)"};
  background: ${(props) =>
    props.outcome === "loss"
      ? "linear-gradient(90deg, rgba(255,0,65,1) 0%, rgba(0,224,255,1) 100%)"
      : "linear-gradient(90deg, rgba(0,224,255,1) 0%, rgba(255,0,68,1) 100%)"};

  > * {
    border: 1px solid black;
  }
`;

const StyledFractionImage = styled.img`
  width: 36px;
  height: 36px;
`;

export default function GameMatch({ game }) {
  const fractionRegex = "_([a-zA-Z0-9.-]*)_";
  let playerFractions = game.info.players[1].factions.map((fraction) =>
    fraction.match(fractionRegex)[1].toLowerCase()
  );
  let enemyFractions = game.info.players[0].factions.map((fraction) =>
    fraction.match(fractionRegex)[1].toLowerCase()
  );
  return (
    <StyledGameMatchConatiner outcome={game.info.players[1].game_outcome}>
      <p>{game.info.game_type}</p>
      <div>
        <p>Game Result</p>
        <h3>{game.info.players[1].game_outcome}</h3>
      </div>

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
