import { useEffect, useState }from 'react';
import Box from '@mui/material/Box';
import SelectOption from './SelectButton';


 function QuaterBlock({setSelected, selected}) {
    console.log('qb',selected )
    const [allPlayers, setAllPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});

   useEffect(() => {
    fetch(' https://mocki.io/v1/1006360e-a379-4e8b-9353-5f34f0c7d5b0')
  .then(response => response.json())
  .then(json => setAllPlayers(json))
   }, []);

//    useEffect(() => {
//         const skills = player.filter(p => p.id == selectedId)[0].skills;
//    },[]);

//    const getPlayerSkills = (id) => {
//     // const skills = player.filter(p => p.id == id)[0].skills;
//     console.log("skills", skills)
//   }
  return (
    <Box
    sx={{ display: "flex",
    flexDirection: "row"
}}
    >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: "column"
      }}
      noValidate
      autoComplete="off"
    >
        <SelectOption list={allPlayers}/>
        <SelectOption list={allPlayers}/>
        <SelectOption list={allPlayers}/>
    </Box>
    <Box
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
    flexDirection: "column"
      }}
      noValidate
      autoComplete="off"
    >
    <SelectOption  setSelectedPlayer={setSelectedPlayer}/>
        <SelectOption  setSelectedPlayer={setSelectedPlayer}/>
        <SelectOption  setSelectedPlayer={setSelectedPlayer}/>
        </Box></Box>
  );
}

export default QuaterBlock;