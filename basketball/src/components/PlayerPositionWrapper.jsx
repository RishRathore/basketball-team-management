import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SelectButton from "./SelectButton";
import { useSelector } from "react-redux";

const PlayerPositionWrapper = ({
  setUniqueValue,
  quaterPlayer,
  teamPlayers,
  id,
}) => {
  const { players = [] } = useSelector((state) => state.basketball);

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [roleErr, setRoleErr] = useState({
    errMsg: "",
    roleErr: false,
  });
  const [playerErr, setPlayerErr] = useState({
    errMsg: "",
    playerErr: false
  });

  useEffect(() => {
    if (teamPlayers.length === 0) {
      setSelectedPlayer(null)
      setSelectedPosition(null)
    }
  }, [teamPlayers])

  const handlePosition = (value) => {
    setRoleErr({ errMsg: "", roleErr: false });

    const isId = quaterPlayer.find((data) => data.userId === selectedPlayer);
    const isSkill = quaterPlayer.find((data) => data.position === value);

    if (quaterPlayer.length > 0 && isId) {
      if (isSkill && isId.userId === selectedPlayer) {
        setRoleErr({errMsg: "Already selected", roleErr: true });
        setSelectedPosition(value);
      } else {
        setRoleErr({errMsg: "", roleErr: false });
        const players = { userId: selectedPlayer, position: value };
        const updated = quaterPlayer.map((a) =>
          a.userId === selectedPlayer ? players : a
        );
        setSelectedPosition(players);
        setUniqueValue(players, false, updated);
      }
    } else if (!isId && isSkill) {
        setRoleErr({ errMsg: "Already selected", roleErr: true });
      setSelectedPosition(isSkill);
    } else if (isSkill) {
      setSelectedPosition(isSkill);
      setUniqueValue(null, false, quaterPlayer);
    } else {
      setRoleErr({errMsg: "", roleErr: false });
      const players = { userId: selectedPlayer, position: value };
      setSelectedPosition(players);
      setUniqueValue(players, false);
    }
  };

  const handlePlayer = (value, id) => {
    setPlayerErr({ playerErr: false, errMsg: ""});
    setRoleErr({ errMsg: "",  roleErr: false });

    const isId = teamPlayers.find((playerId) => playerId === value);

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
    }
    return [""];
  };

  return (
    <Box sx={{
      margin: "25px 0px 0px 0px",
      padding: '0px 15px 0px 15px',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }}>
      <SelectButton
        label="Player Name"
        id={id}
        list={players}
        setSelected={handlePlayer}
        selected={selectedPlayer}
        fieldErr={playerErr}
      />
      <SelectButton
        label="Position"
        list={skillsList()}
        setSelected={handlePosition}
        selected={selectedPosition}
        fieldErr={roleErr}
      />
    </Box>
  );
};

export default PlayerPositionWrapper;
