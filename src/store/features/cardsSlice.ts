import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { characterType } from "../../types/characterType";

type CardsSliceType = {
  products: characterType[];
  filter: string,
}

const initialState: CardsSliceType = {
  products: [],
  filter: "none",
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<characterType[]>) => {
      state.products = action.payload;
    },
    addCard: (state, action: PayloadAction<characterType>) => {
      state.products.unshift(action.payload);
    },
    changeLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const thisCard = state.products.findIndex((card) => card._id === id);

      if (thisCard !== -1) {
        state.products[thisCard].isLiked = !state.products[thisCard].isLiked;
      }
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const newArr = state.products.filter((card) => card._id !== id);
      state.products = newArr;
    },
    filtration: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setCards, addCard, changeLike } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
