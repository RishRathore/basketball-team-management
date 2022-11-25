import React, { useState } from "react";
import SelectButton from "./SelectButton";
import { useSelector } from "react-redux";
import { findDuplicates } from "../utils";
import Box from "@mui/material/Box";

const PlayerSkillWrapper = ({
  setUniqueValue,
  playerRole,
  teamPlayers,
  id,
  quaterErr,
  setQuaterErr,
}) => {

  const { players = [] } = useSelector((state) => state.basketball);

  //
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedSkil, setSelectedSkil] = useState(null);

  // getting error if already selected player and role
  const isPlayerError = teamPlayers.filter((a) => a?.index === id)[0]?.error;   
  const isRoleErr = playerRole.filter((a) => a?.index === id)[0]?.error;

  //  handle player change and updating team player
  const verifyPlayer = (value, id) => {
    setQuaterErr({ error: false, errMsg: "" });
    const player = players.filter((a) => a.id === value)[0];
    const data = {
      index: id,
      id: value,
      error: false,
      player: player,
    };
    let teamPlayersRef = [...teamPlayers];
    teamPlayersRef[id] = data;
    setUniqueValue(true, teamPlayersRef);
    findDuplicates(teamPlayersRef, data);   // validate that player is Already selected or not
    setSelectedPlayer(data);
  };

    //  handle role change and updating player role
  const verifyRole = (value, id) => {
    setQuaterErr({ error: false, errMsg: "" });
    const player = players.filter((a) => a.id === selectedPlayer.id)[0];
    const data = {
      index: id,
      id: value,
      role: value,
      error: false,
      playerName: player.firstName,
    };
    let playerRoleRef = [...playerRole];
    playerRoleRef[id] = data;
    setUniqueValue(false, playerRoleRef);
    findDuplicates(playerRoleRef, data);       // validate that role is Already selected or not
    setSelectedSkil(value);
  };

  // getting skills for selected player id
  const skillsList = () => {
    if (selectedPlayer?.id) {
      return players.filter((p) => p.id === selectedPlayer?.id)[0]?.skills;
    } else {
      return [""];
    }
  };

  return (
    <Box
      sx={{
        margin: "25px 0px 0px 0px",
        padding: "0px 15px 0px 15px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <SelectButton
        label="Player Name"
        id={id}
        list={players}
        onSelectChange={verifyPlayer}
        selected={selectedPlayer}
        playerErr={isPlayerError}
        quaterErr={quaterErr}
      />
      <SelectButton
        label="Role"
        id={id}
        list={skillsList()}
        onSelectChange={verifyRole}
        selected={selectedSkil}
        roleErr={isRoleErr}
        quaterErr={quaterErr}
      />
    </Box>
  );
};

export default PlayerSkillWrapper;
