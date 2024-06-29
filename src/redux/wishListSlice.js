
import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const checkWishList = action.payload;
            if(state.items.includes(checkWishList)){
                state.items = state.items.filter((item) => item!==checkWishList)
            }else{
                state.items.push(checkWishList)
            }
        },
        removeWishListItem: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
        }
    }
})
export const {addItem, removeWishListItem} = wishListSlice.actions;
export default wishListSlice.reducer;