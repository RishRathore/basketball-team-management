import React, { useState } from "react";
import Box from '@mui/material/Box';
import SelectButton from "./SelectButton";
import { useSelector } from 'react-redux';

const PlayerSkillWrapper = ({setUniqueValue, uniqueRole, teamPlayers}) => {
    // const { players = [] } = useSelector((state) => state.basketball);

    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedSkil, setSelectedSkil] = useState(null);
    const [uniqueRoleErr, setUniqueRoleErr] = useState({ err: false, errMsg: ''});

     const verifyRole = (value) => {
        setUniqueRoleErr({err: false, errMsg: ''})
        const isId = uniqueRole.find((c) => c.userId == selectedPlayer);
        const isSkil = uniqueRole.find((c) => c.skil == value);

        if(uniqueRole.length > 0 && isId) {
            if(isSkil && isId.userId == selectedPlayer) {
                setUniqueRoleErr({ err : true, errMsg : 'Already selected'})
                setSelectedSkil(isId);
            } else {
                const data = {userId: selectedPlayer, skil: value}
                const updated = uniqueRole.map(a => a.userId == selectedPlayer ? data : a)
                setSelectedSkil(data);
                setUniqueValue(data, false, updated)
            }
        } else if(!isId && isSkil) {
            setUniqueRoleErr({ err : true, errMsg : 'Already selected'})
            setSelectedSkil(null)
        } else if(isSkil) {
            setSelectedSkil(isSkil);
            setUniqueValue(undefined, false, uniqueRole)
        }  else {
                const data = {userId: selectedPlayer, skil: value}
                setSelectedSkil(data)
                setUniqueValue(data, false)
        }
     }

     const verifyPlayer = (value) => {
        if(teamPlayers && teamPlayers.includes(value)) {
            setSelectedPlayer(null)
        } else {
            setSelectedPlayer(value);
            setUniqueValue(value, true)
        }
     }
    

     
     const data = [{
         id : 1,
         firstName: 'sheba',
         skills: ['PG', 'SG', 'CS']
        },
        {
            id : 2,
            firstName: 'ritu',
            skills: ['PG']
           },
           {
            id : 3,
            firstName: 'james',
            skills: ['PG', 'SG']
           },
           {
            id : 4,
            firstName: 'james',
            skills: ['PG', 'SG']
           }
    ]

        const skillsList = () => {
            if(selectedPlayer) {
                return data.filter(p => p.id == selectedPlayer)[0].skills;
            } else {
                return [];
            }
        };

    return ( 
    <Box sx={{ margin: '25px'}}>
        <SelectButton 
            list={data} 
            setSelected={verifyPlayer} 
            selected={selectedPlayer}
        />
        <SelectButton
            isSkills
            list={skillsList()}
            setSelected={verifyRole}
            selected={selectedSkil}
            uniqueRoleErr={uniqueRoleErr}
        />
        {uniqueRoleErr?.err && <p>{uniqueRoleErr.errMsg} </p>}
    </Box>);
}
 
export default PlayerSkillWrapper;