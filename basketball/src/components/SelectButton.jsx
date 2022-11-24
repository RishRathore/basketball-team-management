import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { useStyles } from "../utils/styles";

function SelectOption({ id, list, selected, setSelected, fieldErr, label }) {
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
        value={selected?.position || selected}
        onChange={handleChange}
        error={fieldErr?.playerErr || fieldErr?.roleErr}
      >
        {list?.map((option) => (
          <MenuItem key={option?.id || option} value={option?.id || option}>
            <ListItemText primary={option?.firstName || option} />
          </MenuItem>
        ))}
      </Select>
      {(fieldErr?.playerErr || fieldErr?.roleErr) && <Box>{fieldErr?.errMsg}</Box>}
    </FormControl>
  );
}

export default SelectOption;
