import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  isAuth: boolean
  lightnessValue: number
  contrastValue: number
  sharpnessValue: number
  saturationValue: number
  grayScale: number
}

const initialState: ColorState = {
	isAuth: false,
	lightnessValue: 0,
	contrastValue: 100,
	sharpnessValue: 0,
	saturationValue: 100,
	grayScale: 0,
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
		state.isAuth = action.payload
    },
	setLightnessValue(state, action: PayloadAction<number>) {
		state.lightnessValue = action.payload
    },
	setContrastValue(state, action: PayloadAction<number>) {
		state.contrastValue = action.payload
    },
	setSharpnessValue(state, action: PayloadAction<number>) {
		state.sharpnessValue = action.payload
    },
	setSaturationValue(state, action: PayloadAction<number>) {
		state.saturationValue = action.payload
    },
	setGrayScaleValue(state, action: PayloadAction<number>) {
		state.grayScale = action.payload
    },
  },
})


export const { setIsAuth, setLightnessValue, setContrastValue, setSharpnessValue, setSaturationValue, setGrayScaleValue } = colorSlice.actions

export default colorSlice.reducer