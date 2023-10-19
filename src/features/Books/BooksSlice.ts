import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IBooks, IData } from "./Books.interfaces";

// URLS
const API_URL = (obj: {
  title: string;
  pag: number;
  secondSelect: string;
  selectCategorySelect: string;
}) => {
  console.log(obj.secondSelect);
  console.log(obj.selectCategorySelect);

  const URL = `https://www.googleapis.com/books/v1/volumes?q=${obj.title}+subject:${obj.selectCategorySelect}&orderBy=${obj.secondSelect}&maxResults=30&startIndex=${obj.pag}&key=AIzaSyDeQASl3UUCNs6bEYxp33cAtAC_u5V_dzo`;
  return URL;
};

// State

const initialState: IBooks = {
  status: "idle",
  entities: [],
  errors: null,
  countResult: 0,
  request: "",
  secondSelect: "relevance",
  selectCategory: "",
};

// Thunks

export const getBooks = createAsyncThunk<
  IData,
  {
    title: string;
    pag: number;
    secondSelect: string;
    selectCategorySelect: string;
  },
  { state: IBooks }
>(
  "books",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      console.log(obj.selectCategorySelect);
      dispatch(setSecondSelect(obj.secondSelect));
      dispatch(setSelectCategory(obj.selectCategorySelect));
      const { data: books } = await axios.get(API_URL(obj));
      return books;
    } catch (err) {
      return rejectWithValue("Falled fetched all books...");
    }
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

// Slice

export const BookSlice = createSlice({
  name: "@@Books/getData",
  initialState,
  reducers: {
    clearBooksData: (state) => {
      state.entities = [];
      state.errors = null;
      state.status = "idle";
      state.countResult = 0;
    },
    addRequestTitle: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    setSecondSelect: (state, action: PayloadAction<string>) => {
      state.secondSelect = action.payload;
    },
    setSelectCategory: (state, action: PayloadAction<string>) => {
      state.selectCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = "loading";
        state.errors = null;
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = "rejected";
        state.errors = "something went wrong!";
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = "receved";
        state.entities = state.entities.concat(action.payload.items);
        if (!state.countResult) {
          state.countResult = action.payload.totalItems;
        }
      });
  },
});

export const {
  clearBooksData,
  addRequestTitle,
  setSecondSelect,
  setSelectCategory,
} = BookSlice.actions;
