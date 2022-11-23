import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import PlayerSkillWrapper from "./PlayerSkillWrapper";
import Button from "@mui/material/Button";
import { createTeam } from "../redux/features/playerSlices";

const QuaterBlock = () => {
  const dispatch = useDispatch();

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [uniqueRole, setUniqueRole] = useState([]);
  const [formErr, setFormErr] = useState(false);        // On submit Error check

  const setUniqueValue = (value, player, updated) => {
    setFormErr(false)
    if (player) {
      setTeamPlayers(updated);
    } else if (!player && updated) {
      setUniqueRole(updated);
    } else {
      setUniqueRole([...uniqueRole, value]);
    }
  };

  const handleSubmit = () => {
    if (uniqueRole.length === 5 && teamPlayers.length === 5) {
      dispatch(createTeam(uniqueRole));
    } else {
      setFormErr(true)
    }
  };

  const handleSelect = ({ playerId, position, fieldName }) => {

  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {[0, 1, 2, 3, 4].map((p) => (
        <PlayerSkillWrapper
          id={p}
          setUniqueValue={setUniqueValue}
          uniqueRole={uniqueRole}
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
      {formErr && <Box sx={{ color: 'red', margin: '10px' }}>Please fill all the fields!</Box>}
    </Box>
  );
};

export default QuaterBlock;
