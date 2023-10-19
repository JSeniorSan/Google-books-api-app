import { RootState } from "..";

export const BooksSelector = (state: RootState) => state.entities;

export const BooksErrors = (state: RootState) => state.errors;

export const BooksStatus = (state: RootState) => state.status;

export const BooksCount = (state: RootState) => state.countResult;

export const BooksRequest = (state: RootState) => state.request;

export const BooksCategory = (state: RootState) => state.selectCategory;

export const BooksSecondSelect = (state: RootState) => state.secondSelect;
