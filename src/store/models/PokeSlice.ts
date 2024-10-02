import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { PokeSimpleType } from '../../types/PokeType';

const initialState: PokeSimpleType[] = [];

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async () => {
  const response = await doGet('/pokemon');

  if (response) {
    return response;
  }

  return [];
});

const PokeSlice = createSlice({
  name: 'pokemons',
  initialState: { poke: initialState, loading: false },
  reducers: {
    addProduct: (state, action: PayloadAction<PokeSimpleType>) => {
      state.poke.push({ ...action.payload });
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

export const { addProduct } = PokeSlice.actions;
export default PokeSlice.reducer;
