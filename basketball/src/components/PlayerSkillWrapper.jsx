import React, { useState } from "react";
import Box from "@mui/material/Box";
import SelectButton from "./SelectButton";
// import { useSelector } from "react-redux";

const PlayerSkillWrapper = ({
  setUniqueValue,
  uniqueRole,
  teamPlayers,
  id,
}) => {
//    const { players = [] } = useSelector((state) => state.basketball);

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

  const players = [
    {
      id: "89980354-0b35-4844-9669-983a8e3b6819",
      firstName: "a1",
      lastName: "a1",
      height: "12",
      skills: ["Point guard(PG)", "Shooting guard(SG)"],
    },
  
    {
      id: "31572565-6f75-4b94-8cb6-5dae5df306de",
      firstName: "b1",
      lastName: "B1",
      height: "5",
      skills: ["Point guard(PG)", "Power forward(PF)"],
    },
  
    {
      id: "31572565-660d-4781-9348-0e620106bb68",
      firstName: "C1",
      lastName: "c1",
      height: "65",
      skills: ["Point guard(PG)", "Centre(C)", "Small forward(SF)"],
    },
    {
      id: "5dae5df306de-660d-9348-9348-0e620106bb68",
      firstName: "d1",
      lastName: "d1",
      height: "65",
      skills: ["Small forward(SF)"],
    },
    {
      id: "54996573-660d-4781-9348-0e620106bb68",
      firstName: "s1",
      lastName: "s1",
      height: "65",
      skills: ["Point guard(PG)", "Small forward(SF)"],
    },
    {
      id: "0e620106bb68-660d-4778-9390-54996573",
      firstName: "e1",
      lastName: "e1",
      height: "65",
      skills: ["Shooting guard(SG)", "Small forward(SF)"],
    },
  ];
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
      />
      <SelectButton
        label="Position"
        list={skillsList()}
        setSelected={verifyRole}
        selected={selectedSkil}
        uniqueRoleErr={roleErr}
      />
    </Box>
  );
};

export default PlayerSkillWrapper;
