import React from "react";
import GameMatch from "./GameMatch";

export default function GameMatchList() {
    const game = {
        "metadata": {
            "data_version": "2",
            "match_id": "9b10da6c-851e-4f0b-835e-df2153ba79a6",
            "participants": [
                "l0h0i3vrF2herPY45cXp6KD8MowDaCbJ62G5dNgDvS8qHc1b-vlUzAaGJMrF4uVXhPG3vV8U-U8duw",
                "xpOEL8y39KqGRyIo_hdlHSP59K7Po_iI-K33qxmJrr6uhX9OXb4Dg7fbH0QhD7kf9noRAch17oPt4w"
            ]
        },
        "info": {
            "game_mode": "Constructed",
            "game_type": "Ranked",
            "game_start_time_utc": "2022-09-02T12:07:04.5935601+00:00",
            "game_version": "live-green-3-14-52",
            "players": [
                {
                    "puuid": "l0h0i3vrF2herPY45cXp6KD8MowDaCbJ62G5dNgDvS8qHc1b-vlUzAaGJMrF4uVXhPG3vV8U-U8duw",
                    "deck_id": "4da315ab-3f4a-404a-a056-2a824aa9be36",
                    "deck_code": "CMBQGAIFE42TQAYDAUBQIBQFAEBQEDAPFA3QEAIBAMXAEAQDAMCACAIBAUXQ",
                    "factions": [
                        "faction_Noxus_Name",
                        "faction_ShadowIsles_Name"
                    ],
                    "game_outcome": "win",
                    "order_of_play": 1
                },
                {
                    "puuid": "xpOEL8y39KqGRyIo_hdlHSP59K7Po_iI-K33qxmJrr6uhX9OXb4Dg7fbH0QhD7kf9noRAch17oPt4w",
                    "deck_id": "ea0d560a-a41a-4589-ae1c-b685d0db285b",
                    "deck_code": "CICQCAQDAMAQKBQBAEDAMHQEAIDBMGRGHICQCAYCBQHSKKABAEDAMFICAEAQGMYBAIDC2",
                    "factions": [
                        "faction_Bilgewater_Name",
                        "faction_Noxus_Name"
                    ],
                    "game_outcome": "loss",
                    "order_of_play": 0
                }
            ],
            "total_turn_count": 29
        }
    }
  return (
    <>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
      <GameMatch game={game}/>
    </>
  );
}
