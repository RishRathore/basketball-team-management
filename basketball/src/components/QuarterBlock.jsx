import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import PlayerPositionWrapper from "./PlayerPositionWrapper";
import Notifier from './Notifier';
import { createTeam } from "../redux/features/playerSlices";

const QuaterBlock = () => {
  const dispatch = useDispatch();

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [quaterPlayer, setQuaterPlayer] = useState([]);
  const [showNotifier, toggleNotifier] = useState(false)
  const [notifierMsg, setNotifierMsg] = useState('')
  const [formErr, setFormErr] = useState(false);        // On submit Error check

  let quaterNumber = 1;

  const setUniqueValue = (value, player, updated) => {
    setFormErr(false)
    if (player) {
      setTeamPlayers(updated);
    } else if (!player && updated) {
     setQuaterPlayer(updated);
    } else {
     setQuaterPlayer([...quaterPlayer, value]);
    }
  };

  const resetForm = () => {
   setQuaterPlayer([])
    setTeamPlayers([])
    setFormErr(false)
  }

  const handleSubmit = () => {
    if (quaterPlayer.length === 5 && teamPlayers.length === 5) {
      dispatch(createTeam({
        [`quater-${quaterNumber}`]: quaterPlayer
      }));
      quaterNumber++;
      toggleNotifier(true)
      setNotifierMsg(`Quater-${quaterNumber} created !. Can check in console and redux`)
      console.log(`Quater-${quaterNumber}:`, quaterPlayer)
      resetForm()
    } else {
      setFormErr(true)
    }
  };

  const toolCountArray = Array.from(Array(5).keys())

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {toolCountArray.map((tool) => (
        <PlayerPositionWrapper
          key={tool}
          id={tool}
          setUniqueValue={setUniqueValue}
          quaterPlayer={quaterPlayer}
          teamPlayers={teamPlayers}
        />
      ))}
      <Box style={{ marginTop: '30px' }}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
      {formErr && <Box sx={{ color: 'red', margin: '10px' }}>
        Please fill all the fields!
      </Box>}
      <Notifier
        open={showNotifier}
        msg={notifierMsg}
        handleClose={() => { toggleNotifier(false) }}
      />
    </Box>
  );
};

export default QuaterBlock;
