import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "basketball",
  initialState: {
    players: [],
    teams: {},
  },
  reducers: {
    addPlayer: (state, action) => {
      state.players = [...state.players, action.payload];
    },

    createTeam: (state, action) => {
        state.teams = action.payload
    },
   
  },
});

export const { addPlayer, createTeam } = playerSlice.actions;

export default playerSlice.reducer;