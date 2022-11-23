import { useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import PlayerSkillWrapper from './PlayerSkillWrapper';
import Button from '@mui/material/Button';
import { createTeam } from '../redux/features/playerSlices';


 function QuaterBlock() {
    const dispatch = useDispatch();
   const { teams,players } = useSelector((state) => state.basketball)
   
   console.log(teams,"------")
    const [uniqueRole, setUniqueRole] = useState([]);
    const [teamPlayers, setTeamPlayers] = useState([]);

    const setUniqueValue = (value, player, updated) => {
      if(player) {
        setTeamPlayers([...teamPlayers, value])
      } else if(!player && updated){
        setUniqueRole(updated)
      } else {
        setUniqueRole([...uniqueRole, value])
      }
    };
    console.log(players,"playersplayers");
    const handleSubmit = (players) => {
      // console.log(event.target.value);
      dispatch(createTeam(players))
    }

  return (
    <Box
    sx={{ display: "flex",
    flexDirection: "column"
  }}
    >
      <PlayerSkillWrapper setUniqueValue={setUniqueValue} uniqueRole={uniqueRole} teamPlayers={teamPlayers}/>
      <PlayerSkillWrapper setUniqueValue={setUniqueValue} uniqueRole={uniqueRole} teamPlayers={teamPlayers}/>
      <PlayerSkillWrapper setUniqueValue={setUniqueValue} uniqueRole={uniqueRole} teamPlayers={teamPlayers}/>
      <PlayerSkillWrapper setUniqueValue={setUniqueValue} uniqueRole={uniqueRole} teamPlayers={teamPlayers}/>
      <PlayerSkillWrapper setUniqueValue={setUniqueValue} uniqueRole={uniqueRole} teamPlayers={teamPlayers}/>
      <Box>
        <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => handleSubmit(players)}
          >
              Save
          </Button>
        </Box>
    </Box>
  );
}

export default QuaterBlock;