import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles } from "../utils/styles";
import { options } from "../utils/constants";

function SelectOption({list, selected, setSelected, isSkills,uniqueRoleErr}) {
  const classes = useStyles();
 

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected?.skil || selected}
        onChange={handleChange}
        error={uniqueRoleErr?.err}
        helperText={uniqueRoleErr?.err && uniqueRoleErr?.errMsg}
      >
        {!isSkills && list?.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <ListItemText primary={option.firstName} />
          </MenuItem>
        ))}
        {isSkills && list?.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectOption;
