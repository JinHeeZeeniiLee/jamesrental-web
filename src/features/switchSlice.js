import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
    name: "switch",
    initialState:{
        isOn : false,
    },
    reducers: {
        toggleSwitch: (state) => {
            state.isOn = !state.isOn;
        }
    }
});

export const {toggleSwitch} = switchSlice.actions;
export default switchSlice.reducer;