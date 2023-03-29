import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setIsAuth } from '../slices/userSlice'
import { RootState } from '../store/store'
import { DEFAULT_THEME, applyTheme } from './Home'
import {
	setBrightnessValue,
	setContrastValue,
	setSaturationValue,
	setSubtitles,
	setNoEpilepsy
} from '../slices/colorSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const User: React.FC = () => {

	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state: RootState) => state.user)

	useEffect(() => {
		if (isAuth) {
			let activeTheme = localStorage.getItem('accessibilityPreset') || DEFAULT_THEME
			applyTheme(activeTheme)
			dispatch(setBrightnessValue(Number(localStorage.getItem('brightnessPreset'))))
			dispatch(setContrastValue(Number(localStorage.getItem('contrastPreset'))))
			dispatch(setSaturationValue(Number(localStorage.getItem('saturationPreset'))))
			// dispatchsetsharpnessValue(Number(localStorage.getItem('sharpnessPreset'))))
			dispatch(setSubtitles(!!localStorage.getItem('subtitles')))
			dispatch(setNoEpilepsy(!!localStorage.getItem('noEpilepsy')))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')

	const loginRef = useRef<HTMLInputElement | null>(null)
	const passRef = useRef<HTMLInputElement | null>(null)

	const authData = {
		login: 'admin',
		pass: 'admin'
	}

	const auth = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		if (login === authData.login && pass === authData.pass) {
			dispatch(setIsAuth(true))
		} else {
			alert('Введены неправильные данные! Повторите попытку.')
		}
	}

	const logout = () => {
		dispatch(setIsAuth(false))
	}

	const setPreset1 = () => {
		dispatch(setBrightnessValue(Number(localStorage.getItem('myPreset1')?.split(',')[0])))
		dispatch(setContrastValue(Number(localStorage.getItem('myPreset1')?.split(',')[1])))
		dispatch(setSaturationValue(Number(localStorage.getItem('myPreset1')?.split(',')[2])))
		// dispatch(setsharpnessValue(Number(localStorage.getItem('myPreset1')?.split(',')[])))
		dispatch(setSubtitles(!!localStorage.getItem('myPreset1')?.split(',')[3]))
		dispatch(setNoEpilepsy(!!localStorage.getItem('myPreset1')?.split(',')[4]))
		toast.success('🦄 успешно установлено!');
	}

	const setPreset2 = () => {
		dispatch(setBrightnessValue(Number(localStorage.getItem('myPreset2')?.split(',')[0])))
		dispatch(setContrastValue(Number(localStorage.getItem('myPreset2')?.split(',')[1])))
		dispatch(setSaturationValue(Number(localStorage.getItem('myPreset2')?.split(',')[2])))
		// dispatch(setsharpnessValue(Number(localStorage.getItem('myPreset2')?.split(',')[])))
		dispatch(setSubtitles(!!localStorage.getItem('myPreset2')?.split(',')[3]))
		dispatch(setNoEpilepsy(!!localStorage.getItem('myPreset2')?.split(',')[4]))
		toast.success('🦄 успешно установлено!');
	}

	const setPreset3 = () => {
		dispatch(setBrightnessValue(Number(localStorage.getItem('myPreset3')?.split(',')[0])))
		dispatch(setContrastValue(Number(localStorage.getItem('myPreset3')?.split(',')[1])))
		dispatch(setSaturationValue(Number(localStorage.getItem('myPreset3')?.split(',')[2])))
		// dispatch(setsharpnessValue(Number(localStorage.getItem('myPreset3')?.split(',')[])))
		dispatch(setSubtitles(!!localStorage.getItem('myPreset3')?.split(',')[3]))
		dispatch(setNoEpilepsy(!!localStorage.getItem('myPreset3')?.split(',')[4]))
		toast.success('🦄 успешно установлено!');
	}

	return (
		<div className='profile'>
			{
				isAuth
					? (
						<div className='my-profile'>
							<h2>Мой профиль</h2>
							<div className='my-profile-name'>
								<label>
									Имя пользователя:
									<span>{authData.login}</span>
								</label>
								<div className='presets'>
									{localStorage.getItem('myPreset1') &&
										<button
											className='preset-btn'
											onClick={setPreset1}
										>Включить пресет №1</button>}
									{localStorage.getItem('myPreset2') &&
										<button
											className='preset-btn'
											onClick={setPreset2}
										>Включить пресет №2</button>}
									{localStorage.getItem('myPreset3') &&
										<button
											className='preset-btn'
											onClick={setPreset3}
										>Включить пресет №3</button>}
								</div>
							</div>
							<button onClick={logout}>Выйти</button>
						</div>
					) : (
						<form className='auth-form'>
							<legend>Войдите в профиль</legend>
							<div className='input-field'>
								<label> Введите логин
									<input
										ref={loginRef}
										type='text'
										placeholder='admin'
										value={login}
										onChange={() => setLogin(loginRef.current!.value)}
									/>
								</label>
							</div>
							<div className='input-field'>
								<label> Введите пароль
									<input
										ref={passRef}
										type='password'
										placeholder='admin'
										value={pass}
										onChange={() => setPass(passRef.current!.value)}
									/>
								</label>
							</div>
							<button type='submit' onClick={auth}>Войти</button>
						</form>
					)
			}
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}

export default User