import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokeDefaultType } from '../../types/PokeType';

const initialState: PokeDefaultType[] = [];

const LikeSlice = createSlice({
  name: 'likes',
  initialState: { poke: initialState },
  reducers: {
    likedPoke: (state, action: PayloadAction<PokeDefaultType>) => {
      const alreadyLiked = state.poke.find(poke => poke.id === action.payload.id);
      if (alreadyLiked) {
        state.poke = state.poke.filter(poke => poke.id !== action.payload.id);
        return state;
      }
      state.poke.push(action.payload);
      return state;
    },
  },
});

export const { likedPoke } = LikeSlice.actions;
export default LikeSlice.reducer;
