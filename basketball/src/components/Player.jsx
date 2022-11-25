import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PlayerList from './PlayerList';
import Notifier from './Notifier';
import { addPlayer } from '../redux/features/playerSlices';
import { useStyles, MenuProps } from "../utils/styles";
import { options, initialValues } from "../utils/constants";
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


const Player = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedSkills, setSelectedSkills] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [showNotifier, toggleNotifier] = useState(false)
  const [notifierMsg, setNotifierMsg] = useState('')

  const { players } = useSelector(state => state.basketball);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedSkills(value);
    setFormValues({
      ...formValues,
      skills: {
        ...formValues['skills'],
        value
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "height" && !/^[0-9]+$/.test(value)) { // check data type number
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value: "",
          errorMessage: "Height must be a number",
          error: true
        }
      })
    } else if (name !== "skills") { // handling skills fields on handleSelectChange
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value,
          errorMessage: "",
          error: false,
        }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues }
    let error;
    let data = { id: uuidv4() }

    formFields.forEach(key => {
      data = {
        ...data,
        [key]: formValues[key].value
      }
    })

    for (let index = 0; index < formFields.length; index++) { // check empty fields
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === '' ||
        (currentField === 'skills' && currentValue.length === 0)) {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        }
        setFormValues(newFormValues);
        error = true;
      }
    }
    if (!error) {
      dispatch(addPlayer(data))
      setFormValues(initialValues);
      setSelectedSkills([])
      handleNotifier()
      setNotifierMsg('Player added !')
    } else {
      handleNotifier()
      setNotifierMsg('Please check form !')
    }
  }

  const handleNotifier = () => {
    toggleNotifier(!showNotifier)
  }

  return (
    <Box style={{ maxWidth: '100%', padding: '0px 15px 0px 15px' }} className="formBox">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          'display': 'flex',
          'flexDirection': 'column',
          'justify-content': 'centre',
          'align-items': 'centre'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box style={{ maxWidth: "500px", margin: "30px auto 0px auto" }}>
          <TextField
            id="First Name"
            variant="filled"
            name="firstName"
            value={formValues.firstName.value}
            label="First Name"
            onChange={handleChange}
            error={formValues.firstName.error}
            helperText={formValues.firstName.error && formValues.firstName.errorMessage}
            style={{ width: '100%' }}
          />
          <TextField
            id="Last Name"
            variant="filled"
            name="lastName"
            value={formValues.lastName.value}
            label="Last Name"
            onChange={handleChange}
            error={formValues.lastName.error}
            helperText={formValues.lastName.error && formValues.lastName.errorMessage}
            style={{ width: '100%' }}
          />
          <TextField
            id="Height"
            variant="filled"
            name="height"
            value={formValues.height.value}
            label="Height"
            onChange={handleChange}
            error={formValues.height.error}
            helperText={formValues.height.error && formValues.height.errorMessage}
            style={{ width: '100%' }}
          />
          <FormControl style={{ width: "100%", marginBottom: '15px' }} className={classes.formControl}>
            <TextField
              name="skills"
              variant="filled"
              select
              label="Skills"
              error={formValues.skills.error}
              helperText={
                formValues.skills.error && formValues.skills.errorMessage
              }
              style={{ width: "100%" }}
              SelectProps={{
                multiple: true,
                value: selectedSkills,
                onChange: handleSelectChange,
                MenuProps,
                renderValue: (selectedSkills) => selectedSkills.join(", "),
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selectedSkills.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Box style={{ width: "100%", marginBottom: '15px' }}>
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

        {players.length > 0 && (
          <Box>
            <PlayerList />
          </Box>
        )}
        <Notifier
          open={showNotifier}
          msg={notifierMsg}
          handleClose={handleNotifier}
        />
      </Box>
    </Box>
  );
}

export default Player;