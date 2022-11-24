import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import PlayerSkillWrapper from "./PlayerSkillWrapper";
import Button from "@mui/material/Button";
import { createTeam } from "../redux/features/playerSlices";
import Notifier from './Notifier';

const QuaterBlock = () => {
  const dispatch = useDispatch();

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [uniqueRole, setUniqueRole] = useState([]);
  const [showNotifier, toggleNotifier] = useState(false)
  const [notifierMsg, setNotifierMsg] = useState('')
  const [quaterErr, setQuaterErr] = useState({
     errMsg: "",
     globalErr: false,
    })

  const setUniqueValue = (value, player, updated) => {
    if (player) {
      setTeamPlayers(updated);
    } else if (!player && updated) {
      setUniqueRole(updated);
    } else {
      setUniqueRole([...uniqueRole, value]);
    }
  };

  const handleSubmit = () => {
     if(teamPlayers.length <=0 ){
      setQuaterErr({ globalErr: true, errMsg: "All fields are required"});
     }
     
   else if (uniqueRole.length === 5 && teamPlayers.length === 5) {
      handleNotifier()
      setNotifierMsg('Player added !')
      dispatch(createTeam(uniqueRole));
    } else {
      handleNotifier()
      setNotifierMsg('Please check form !')
    }
  };

  const handleNotifier = () => {
    toggleNotifier(!showNotifier)
  }


  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {[0, 1, 2, 3, 4].map((p) => (
        <PlayerSkillWrapper
          id={p}
          setUniqueValue={setUniqueValue}
          uniqueRole={uniqueRole}
          teamPlayers={teamPlayers}
          quaterErr={quaterErr}
          setQuaterErr={setQuaterErr}
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
      <Notifier
          open={showNotifier}
          msg={notifierMsg}
          handleClose={handleNotifier}
        />
    </Box>
  );
};

export default QuaterBlock;
