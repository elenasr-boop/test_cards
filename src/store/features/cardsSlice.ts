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
    }
  },
});

export const { setCards, addCard, changeLike } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;