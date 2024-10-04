import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { PokeDefaultType, PokeFirstReqType } from '../../types/PokeType';

const initialState: PokeDefaultType[] = [];

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async (offset: number) => {
  const firstResponse: PokeFirstReqType = await doGet(`/pokemon/?offset=${offset}&limit=20`);
  const response: PokeDefaultType[] = [];

  for (const poke of firstResponse.results) {
    const getPoke = await doGet(`/pokemon/${poke.name}`);
    response.push(getPoke);
  }

  return response;
});

const PokeSlice = createSlice({
  name: 'pokemons',
  initialState: { poke: initialState, loading: false, offset: 0, likes: [] },
  reducers: {
    addPoke: (state, action: PayloadAction<PokeDefaultType>) => {
      state.poke.push({ ...action.payload });
      state.likes = [];
      state.loading = false;
      return state;
    },
    pokeOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
      return state;
    },
    likedPoke: (state, action: PayloadAction<PokeDefaultType>) => {
      const alreadyLiked = state.likes.find(id => id === action.payload.id);
      if (alreadyLiked) {
        state.likes = state.likes.filter(id => id !== action.payload.id);
        state.loading = false;
        return state;
      }
      state.loading = false;
      state.likes.push(action.payload);
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.poke = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemon.rejected, (state, action) => {
      console.log(action.error);
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemon.pending, state => {
      state.loading = true;
      return state;
    });
  },
});

export const { addPoke, pokeOffset, likedPoke } = PokeSlice.actions;
export default PokeSlice.reducer;
