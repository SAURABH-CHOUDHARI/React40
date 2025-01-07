import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        add: (state,action) => {
            state.product = action.payload;
        },
    }   
})
export default productSlice.reducer;
export const { add } = productSlice.actions;