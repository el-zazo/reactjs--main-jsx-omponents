import { createSlice } from "@reduxjs/toolkit";
import initialState from "./State";

const MessageNavSlice = createSlice({
  name: "MessageNav",
  initialState: initialState,
  reducers: {
    addMessage(state, { payload }) {
      const id = state.last_id;
      state.messages.unshift({ id, ...payload });
      state.last_id = state.last_id + 1;
    },

    removeMessage(state, { payload }) {
      state.messages = state.messages.filter((message) => message.id !== payload);
    },
  },
});

export default MessageNavSlice.reducer;
export const { addMessage, removeMessage } = MessageNavSlice.actions;
