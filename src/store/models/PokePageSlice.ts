import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { PokeDefaultType } from '../../types/PokeType';

const initialState: PokeDefaultType = {
  id: 0,
  name: '',
  height: 0,
  weight: 0,
  base_experience: 0,
  abilities: [],
  sprites: {
    other: {
      'official-artwork': {
        front_default: '',
      },
    },
    back_default: '',
    front_default: '',
    front_shiny: '',
    back_shiny: '',
  },
  stats: [],
  types: [],
};

export const getPokemonPage = createAsyncThunk('pokemon/getSearchPokemon', async (name: string) => {
  const response: PokeDefaultType = await doGet(`/pokemon/${name}`);

  return response;
});

const PokePageSlice = createSlice({
  name: 'pokePage',
  initialState: { poke: initialState, loading: false },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPokemonPage.fulfilled, (state, action) => {
      state.poke = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemonPage.rejected, (state, action) => {
      console.log(action.error);
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemonPage.pending, state => {
      state.loading = true;
      return state;
    });
  },
});

export default PokePageSlice.reducer;
