import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { PokeDefaultType, PokeFirstReqType } from '../../types/PokeType';

const initialState: PokeDefaultType[] = [];

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async () => {
  const firstResponse: PokeFirstReqType = await doGet('/pokemon');
  const response: PokeDefaultType[] = [];

  for (const poke of firstResponse.result) {
    const detailedPoke = await doGet(poke.url);
    response.push(detailedPoke);
  }
  return response;
});

const PokeSlice = createSlice({
  name: 'pokemons',
  initialState: { poke: initialState, loading: false },
  reducers: {
    addProduct: (state, action: PayloadAction<PokeDefaultType>) => {
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
