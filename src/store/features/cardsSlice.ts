import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { characterType } from "../../types/characterType";

const initialState: characterType[] = [];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<characterType[]>) => {
      return action.payload;
    },
    addCard: (state, action: PayloadAction<characterType>) => {
      state.unshift(action.payload);
    },
    changeLike: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        const thisCard = state.findIndex(card => card._id === id);

        if (thisCard !== -1) {
            state[thisCard].isLiked = !state[thisCard].isLiked;
        }
    },
    deleteCard: (state, action: PayloadAction <number>) => {
      const id = action.payload;
      const newArr = state.filter(card => card._id !== id);
      return newArr;
    }
  },
});

export const { setCards, addCard, changeLike, deleteCard } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;