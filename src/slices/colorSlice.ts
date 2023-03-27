import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  brightnessValue: number
  contrastValue: number
  sharpnessValue: number
  saturationValue: number
  grayScale: number
}

const initialState: ColorState = {
	brightnessValue: 0,
	contrastValue: 0,
	sharpnessValue: 0,
	saturationValue: 0,
	grayScale: 0,
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
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

export const { setBrightnessValue, setContrastValue, setSharpnessValue, setSaturationValue, setGrayScaleValue } = colorSlice.actions

export default colorSlice.reducer