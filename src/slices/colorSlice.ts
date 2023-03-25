import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  isAuth: boolean

}

const initialState: ColorState = {
	isAuth: false,

}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<boolean>) {

    },
	
  },
})


export const {  } = colorSlice.actions

export default colorSlice.reducer