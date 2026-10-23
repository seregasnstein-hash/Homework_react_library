import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorite")) || [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.includes(id)) {
        const index = state.indexOf(id);
        state.splice(index, 1);
      } else {
        state.push(id);
      }
    },
    
  },

});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
