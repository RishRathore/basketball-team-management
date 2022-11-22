import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles, options } from "../utils";

function SelectOption({list, getSkills}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // getSkills()
  }, [])

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {list?.map((option) => (
          <MenuItem key={option.id} value={option.firstName}>
            <ListItemText primary={option.firstName} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectOption;
