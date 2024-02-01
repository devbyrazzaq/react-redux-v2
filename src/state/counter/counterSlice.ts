import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number,
    loading: boolean,
}

const initialState: CounterState = {
    value: 0,
    loading: false
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByValue: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state) => {
            state.loading = true
        }).addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.loading = false
            state.value += action.payload
        })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export const { decrement, increment, incrementByValue, decrementByValue } = counterSlice.actions

export default counterSlice.reducer