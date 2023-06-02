import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY 
const baseUrl = process.env.REACT_APP_BASE_LINK_URL

//INI API PUNYA FACILITATOR DARI RAILWAY
export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  async () => {
    try{
        const response = await axios.get("https://km4-challenge-5-api.up.railway.app/api/v1/movie/popular?page=1");
        return response.data.data;
    } catch(error){
        console.log(error)
    }
  }
);

export const registerAccount = createAsyncThunk(
  'register/registerAccount',
  async (param) => {
    try{
        const response = await axios.post("https://km4-challenge-5-api.up.railway.app/api/v1/auth/register", param);
        localStorage.setItem('token', JSON.stringify(response.data.data.token))
        localStorage.setItem('isLogin', true)
        return response.data.data.token;
    } catch(error){
        localStorage.setItem('error', JSON.stringify(error.response.data.message))
    }
  }
);

export const loginAccount = createAsyncThunk(
  'login/loginAccount',
  async (param) => {
    try{
        const response = await axios.post("https://km4-challenge-5-api.up.railway.app/api/v1/auth/login", param);
        localStorage.setItem('token', JSON.stringify(response.data.data.token))
        localStorage.setItem('isLogin', true)
        return response.data.data.token;
    } catch(error){
      console.log(error)
    }
  }
);

export const getMovieList = createAsyncThunk(
    'movie/getMovieList',
    async () => {
      try{
          const response = await axios.get(`${baseUrl}/movie/popular?&api_key=${apiKey}`);
          return response.data.results;
      } catch(error){
          console.log(error)
      }
    }
  );

export const getDetailMovie = createAsyncThunk(
    'movie/getDetailMovie',
    async (id) => {
      try{
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
          return response.data;
      } catch(error){
          console.log(error)
      }
    }
  );

  export const searchMovie = createAsyncThunk(
    'movie/searchMovie',
    async (q) => {
      try{
          const response = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
          return response.data.results;
      } catch(error){
          console.log(error)
      }
    }
  );

const initialState={
    movies: [],
    search:[],
    detail:[],
    register: [],
    login: [],
    loading: true, 
    error: null
}

// Redux Toolkit slice
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMovieList.rejected, (state) => {
        state.loading = false
      })
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(searchMovie.rejected, (state) => {
        state.loading = false
      })
      .addCase(getDetailMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(getDetailMovie.rejected, (state) => {
        state.loading = false
      })
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.register = action.payload;
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false
      })
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false
      }); 
  },
});
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// more code...
export const movieReducer = movieSlice.reducer;