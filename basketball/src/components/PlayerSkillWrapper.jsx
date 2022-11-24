import React, { useState } from "react";
import Box from "@mui/material/Box";
import SelectButton from "./SelectButton";
import { useSelector } from "react-redux";

const PlayerSkillWrapper = ({
  setUniqueValue,
  uniqueRole,
  teamPlayers,
  id,
  quaterErr,
  setQuaterErr
}) => {
  const { players = [] } = useSelector((state) => state.basketball);

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedSkil, setSelectedSkil] = useState(null);
  const [roleErr, setRoleErr] = useState({
    errMsg: "",
    roleErr: false,
  });
  const [playerErr, setPlayerErr] = useState({
    errMsg: "",
    playerErr: false
  });

  const verifyRole = (value) => {
    setRoleErr({errMsg: "",  roleErr: true });
    setQuaterErr({  errMsg: "",
    globalErr: false,})
    const isId = uniqueRole.find((c) => c.userId === selectedPlayer);
    const isSkil = uniqueRole.find((c) => c.skil === value);

    if (uniqueRole.length > 0 && isId) {
      if (isSkil && isId.userId === selectedPlayer) {
        setRoleErr({errMsg: "Already selected", roleErr: true });
        setSelectedSkil(value);
      } else {
        setRoleErr({errMsg: "", roleErr: false });
        const players = { userId: selectedPlayer, skil: value };
        const updated = uniqueRole.map((a) =>
          a.userId === selectedPlayer ? players : a
        );
        setSelectedSkil(players);
        setUniqueValue(players, false, updated);
      }
    } else if (!isId && isSkil) {
        setRoleErr({errMsg: "Already selected", roleErr: true });
      setSelectedSkil(isSkil);
    } else if (isSkil) {
      setSelectedSkil(isSkil);
      setUniqueValue(null, false, uniqueRole);
    } else {
        setRoleErr({errMsg: "", roleErr: false });
      const players = { userId: selectedPlayer, skil: value };
      setSelectedSkil(players);
      setUniqueValue(players, false);
    }
  };

  const verifyPlayer = (value, id) => {
    setPlayerErr({ playerErr: false, errMsg: ""});
    setQuaterErr({  errMsg: "",
    globalErr: false,})
    const isId = teamPlayers.find((c) => c === value);

    if (teamPlayers && teamPlayers.includes(value)) {
      if (teamPlayers[id] === value) {
        setPlayerErr({ playerErr: false, errMsg: ""});
        setSelectedPlayer(value);
      } else if (isId === value) {
        setPlayerErr({ playerErr: true, errMsg: "Player can be selected only once"});
        setSelectedPlayer(value);
      }
    } else {
      let teamPlayersRef = teamPlayers;
      teamPlayersRef[id] = value;
      setSelectedPlayer(value);
      setUniqueValue(value, true, teamPlayersRef, id);
    }
  };

  const skillsList = () => {
    if (selectedPlayer) {
      return players.filter((p) => p.id === selectedPlayer)[0].skills;
    } else {
      return [""];
    }
  };

  return (
    <Box sx={{ margin: "25px 0px 0px 0px", padding: '0px 15px 0px 15px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <SelectButton
        label="Player Name"
        id={id}
        list={players}
        setSelected={verifyPlayer}
        selected={selectedPlayer}
        uniqueRoleErr={playerErr}
        quaterErr ={quaterErr}

      />
      <SelectButton
        label="Position"
        list={skillsList()}
        setSelected={verifyRole}
        selected={selectedSkil}
        uniqueRoleErr={roleErr}
        quaterErr={quaterErr}
      />
    </Box>
  );
};

export default PlayerSkillWrapper;
