import { useState }from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { addPlayer } from '../redux/features/playerSlices';
import { MenuProps, useStyles, options, initialValues } from "../utils";
import UserList from './Userlist';

const Player = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selected, setSelected] = useState([]);
    const [formValues, setFormValues] = useState(initialValues)

    const isAllSelected =
    options.length > 0 && selected.length === options.length;


  
      const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === "all") {
          setSelected(selected.length === options.length ? [] : options);
          return;
        }
        setSelected(value);
      };

      const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "height" && !/^[0-9]+$/.test(value)) {
            setFormValues({
                ...formValues,
                [name]:{
                  ...formValues[name],
                  value : "",
                  errorMessage : "Height must be a number",
                  error : true
                }
              })

        } else {
            setFormValues({
              ...formValues,
              [name]:{
                ...formValues[name],
                value
              }
            })
        }
      }
    console.log(formValues)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formFields = Object.keys(formValues);
        let newFormValues = {...formValues}
        let error;
    
        for (let index = 0; index < formFields.length; index++) {
          const currentField = formFields[index];
          const currentValue = formValues[currentField].value;
        
          if(currentValue === ''){
            newFormValues = {
              ...newFormValues,
              [currentField]:{
                ...newFormValues[currentField],
                error:true
              }
            }
            setFormValues(newFormValues);
            error = true;
          }
        }
        if(!error) {
          delete newFormValues.firstName.error;
          delete newFormValues.firstName.errorMessage;

          delete newFormValues.lastName.error;
          delete newFormValues.lastName.errorMessage;

          delete newFormValues.height.error;
          delete newFormValues.height.errorMessage;
          
          dispatch(addPlayer({...newFormValues, skills: selected})); 
          setFormValues(initialValues);
          setSelected([])
        }
      }

    return ( 
      <Box style={{maxWidth: '500px', margin: '30px auto 0px auto'}} className="formBox">
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          'display': 'flex',
          'flexDirection' : 'column',
          'justify-content':'centre',
          'align-items' : 'centre'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="First Name"
          variant="filled"
          name="firstName"
          value={formValues.firstName.value}
          placeholder="First Name"
          onChange={handleChange}
          error={formValues.firstName.error}
          helperText={formValues.firstName.error && formValues.firstName.errorMessage}
          required
          style={{width: '100%'}}
        />
        <TextField
          id="Last Name"
          variant="filled"
          name="lastName"
          value={formValues.lastName.value}
          placeholder="Last Name"
          onChange={handleChange}
          error={formValues.lastName.error}
          helperText={formValues.lastName.error && formValues.lastName.errorMessage}
          required
          style={{width: '100%'}}
        />
        <TextField
          id="Height"
          variant="filled"
          name="height"
          value={formValues.height.value}
          placeholder="Height"
          onChange={handleChange}
          error={formValues.height.error}
          helperText={formValues.height.error && formValues.height.errorMessage}
          required
          style={{width: '100%'}}
        />
        <Box style={{margin: '20px -8px 25px 14px' }}>
          <InputLabel style={{textAlign: 'left'}} id="mutiple-select-label">Multiple Select</InputLabel>
          <Select
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={handleSelectChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          style={{width: '100%'}}
        >
          <MenuItem
            value="all"
            classes={{
              root: isAllSelected ? classes.selectedAll : ""
            }}
          >
            <ListItemIcon>
              <Checkbox
                classes={{ indeterminate: classes.indeterminateColor }}
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            </ListItemIcon>
            {/* <ListItemText
              classes={{ primary: classes.selectAllText }}
              primary="Select All"
            /> */}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
          </Select>
      </Box>
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
        <Box>
          <UserList formValues={formValues} />
        </Box>
      </Box>
      </Box>
     );
}
 
export default Player;