import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{ state.items.push(action.payload) },
        removeItem:(state,action)=>{ state.items.pop(action.payload) },
        clearItem:(state,action)=>{ state.items = [] },
    },
});


export default cartSlice.reducer;
export const {addItem , removeItem , clearItem} = cartSlice.actions;