import { configureStore, Store, ThunkAction, Action  } from '@reduxjs/toolkit'
import colorReducer from '../slices/colorSlice'
import userReducer from '../slices/userSlice'

export const store: Store = configureStore({
  reducer: {
    color: colorReducer,
	user: userReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
