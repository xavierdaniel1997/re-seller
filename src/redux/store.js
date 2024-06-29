// import { configureStore } from "@reduxjs/toolkit";
// import wishListSlice from "./wishListSlice";

import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishListSlice";

// const store = configureStore({
//     reducer: {
//         wishList: wishListSlice,
//     }
// })

// export default store;


const store = configureStore({
    reducer: {
        wishList: wishListSlice,
    }
})
export default store;