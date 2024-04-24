import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Created store
 *  - configureStore() - rtk
 *
 * Provide my store to app
 *  - <Provider store={store}> - react-redux
 *
 * Slice
 *  - Create Slice - rtk
 *      name: "",
 *      initialState: {}
 *      reducers: {
 *          addItem: (state, action) => {
 *
 *          }
 *      }
 * export const { addItems, removeItems } = cartSlice.actions;
 * export defult cartSlice.reducer;
 *
 * Put that slice into store
 *  - reducer: {
 *      cart: cartSlice,
 *      user: userSlice
 *    }
 */
