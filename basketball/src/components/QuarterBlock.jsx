import { useState }from 'react';
// import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import PlayerSkillWrapper from './PlayerSkillWrapper';
import Button from '@mui/material/Button';


 function QuaterBlock() {
   
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

    const handleSubmit = () => {
      console.log('data')
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
            onClick={handleSubmit}
          >
              Save
          </Button>
        </Box>
    </Box>
  );
}

export default QuaterBlock;