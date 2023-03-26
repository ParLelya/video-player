import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  isAuth: boolean
  brightnessValue: number
  contrastValue: number
  sharpnessValue: number
  saturationValue: number
  grayScale: number
}

const initialState: ColorState = {
	isAuth: false,
	brightnessValue: 0,
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
	setBrightnessValue(state, action: PayloadAction<number>) {
		state.brightnessValue = action.payload
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

export const { setIsAuth, setBrightnessValue, setContrastValue, setSharpnessValue, setSaturationValue, setGrayScaleValue } = colorSlice.actions

export default colorSlice.reducer