import React from "react";
import { useStyles } from "../utils/styles";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

const SelectOption = ({
  id,
  list,
  selected,
  onSelectChange,
  label,
  quaterErr,
  playerErr,
  roleErr,
}) => {
  const classes = useStyles();
  
  // Handling input values
  const handleChange = (event) => {
    const value = event.target.value;
    onSelectChange(value, id);
  };

  return (
    <FormControl className={classes.formControl} sx={{ margin: "10px" }}>
      <InputLabel id={`${label}+${id}`}>{label}</InputLabel>
      <Select
        labelId={`${label}+${id}`}
        id={id}
        value={selected?.skil || selected?.player?.firstName}
        onChange={handleChange}
        error={
          playerErr ? playerErr : quaterErr?.error ? quaterErr.error : roleErr
        }
      >
        {list?.map((option) => (
          <MenuItem key={option?.id || option} value={option?.id || option}>
            <ListItemText primary={option?.firstName || option} />
          </MenuItem>
        ))}
      </Select>
      {(quaterErr?.error || playerErr || roleErr) && (
        <Box style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {(playerErr || roleErr) && "Already Selected !"}{" "}
          {quaterErr?.error && quaterErr?.errMsg}
        </Box>
      )}
    </FormControl>
  );
}

export default SelectOption;
