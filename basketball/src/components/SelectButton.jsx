import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { useStyles } from "../utils/styles";


function SelectOption({ id, list, selected, setSelected, uniqueRoleErr, label, quaterErr, setQuaterErr}) {
  const classes = useStyles();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value, id);
  };

  return (
    <FormControl className={classes.formControl} sx={{ margin: '10px' }}>
      <InputLabel id={`${label}+${id}`}>{label}</InputLabel>
      <Select
        labelId={`${label}+${id}`}
        id={id}
        value={selected?.skil || selected}
        onChange={handleChange}
        error={uniqueRoleErr?.playerErr || uniqueRoleErr?.roleErr}
      >
        {list?.map((option) => (
          <MenuItem key={option?.id || option} value={option?.id || option}>
            <ListItemText primary={option?.firstName || option} />
          </MenuItem>
        ))}
      </Select>
      {(uniqueRoleErr?.playerErr || uniqueRoleErr?.roleErr || quaterErr.globalErr) && <Box style={{color: "red", fontSize: "12px", marginTop: "5px"}}>{uniqueRoleErr?.errMsg} {quaterErr.errMsg}</Box>}
    </FormControl>
  );
}

export default SelectOption;
