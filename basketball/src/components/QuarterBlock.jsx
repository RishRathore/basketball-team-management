import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import PlayerSkillWrapper from "./PlayerSkillWrapper";
import { roleInitialValue, playersInitialValue } from "../utils/constants"
import { createTeam } from "../redux/features/playerSlices";
import Notifier from './Notifier';
import Button from "@mui/material/Button";

const QuaterBlock = () => {
  const dispatch = useDispatch();

  const [teamPlayers, setTeamPlayers] = useState(playersInitialValue); // set players value
  const [playerRole, setPlayerRole] = useState(roleInitialValue);   // set players role
  const [showNotifier, toggleNotifier] = useState(false);
  const [notifierMsg, setNotifierMsg] = useState('');
  const [quaterErr, setQuaterErr] = useState({errMsg: "", error: false});
  const [watcher, setWatcher] = useState({      // watching length of teamPlayers & playerRole
    playerLength: 0,
    roleLength: 0,
  });

  // get button state disable/enable
  const buttonStatus = (((watcher.roleLength === 5) && (watcher.playerLength === 5) ) ? false : true);
  

  //  setUniqueValue => common function to set state of teamPlayers and there role from playerskillswrappper;
  const setUniqueValue = (player, updatedRef) => { 
    if (player) {
      setTeamPlayers(updatedRef);
      getUnique(updatedRef, false);
    } else {
      setPlayerRole(updatedRef);
      getUnique(updatedRef, true);
    }
  };
  

  const handleSubmit = () => {
   if (watcher.roleLength >= 5 && watcher.playerLength >= 5) {
      handleNotifier()
      setNotifierMsg('Team Created')
      const data = playerRole.map(a => {                // setting skills and playername in reudx
        return { skill: a.id, playerName: a.playerName}
      })
      dispatch(createTeam(data));      // dispatch team to redux
    } else {
      handleNotifier()
      setNotifierMsg('Please check form !')
      setQuaterErr({ error : true, errMsg: "* Required"});
    }
  };

  const handleNotifier = () => {
    toggleNotifier(!showNotifier)
  }

  // geting unique values of teamplayers and player role
  const getUnique = (array, roleLength) => {
    const unique = array.filter(function (v) {
      return (
        array.filter(function (v1) {
          return v1.id === v.id && v.id;
        }).length === 1
      );
    });
    if(roleLength) {
      setWatcher({ ...watcher, roleLength: unique.length}); // updating role length
    } else {
      setWatcher({ ...watcher, playerLength: unique.length}); // updating player length
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {[0, 1, 2, 3, 4].map((p) => (
        <PlayerSkillWrapper
          key={p}
          id={p}
          setUniqueValue={setUniqueValue}
          playerRole={playerRole}
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
          disabled={buttonStatus}
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
