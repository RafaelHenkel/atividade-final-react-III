import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { PokeDefaultType, PokeFirstReqType } from '../../types/PokeType';

const initialState: PokeDefaultType[] = [];

export const getSearchPokemon = createAsyncThunk('pokemon/getSearchPokemon', async (search: string) => {
  const firstResponse: PokeFirstReqType = await doGet(`/pokemon/?&limit=1302`);
  const response: PokeDefaultType[] = [];
  if (search.length > 2) {
    const filter = firstResponse.results.filter(poke =>
      poke.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );

    for (const poke of filter) {
      const getPoke = await doGet(`/pokemon/${poke.name}`);
      response.push(getPoke);
    }

    return response;
  }
  return [];
});

const PokeSearchSlice = createSlice({
  name: 'pokeSearch',
  initialState: { poke: initialState, loading: false },
  reducers: {
    addSearchPoke: (state, action: PayloadAction<PokeDefaultType>) => {
      state.poke.push({ ...action.payload });
      state.loading = false;
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(getSearchPokemon.fulfilled, (state, action) => {
      state.poke = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getSearchPokemon.rejected, (state, action) => {
      console.log(action.error);
      state.loading = false;
      return state;
    });
    builder.addCase(getSearchPokemon.pending, state => {
      state.loading = true;
      return state;
    });
  },
});

export const { addSearchPoke } = PokeSearchSlice.actions;
export default PokeSearchSlice.reducer;
