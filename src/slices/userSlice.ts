import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isAuth: boolean
}

const initialState: UserState = {
	isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
		state.isAuth = action.payload
    }
  },
})

export const { setIsAuth } = userSlice.actions

export default userSlice.reducer