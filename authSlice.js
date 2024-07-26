import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const AppData = createAsyncThunk(
    'data/fetchData', async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        count: 0,
        appData: [],
        loading: false,
        error: null,
    },
    reducers: {
        getCounter: (state) => {
            state.count++
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AppData.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(AppData.fulfilled, (state, action) => {
            state.loading = false;
            state.appData = action.payload;
        }).addCase(AppData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }
})
export const { getCounter } = authSlice.actions;
export default authSlice.reducer
