import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setIsAuth } from '../slices/userSlice'
import { RootState } from '../store/store'
import { DEFAULT_THEME, applyTheme } from './Home'

const User: React.FC = () => {

	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state: RootState) => state.user)

	useEffect(() => {
		if (isAuth) {
			let activeTheme = localStorage.getItem('accessibilityPreset') || DEFAULT_THEME
			applyTheme(activeTheme)
		} else {
			applyTheme(DEFAULT_THEME)
		}
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
									{localStorage.getItem('myPreset1') && <button className='preset-btn'>Включить пресет №1</button>}
									{localStorage.getItem('myPreset2') && <button className='preset-btn'>Включить пресет №2</button>}
									{localStorage.getItem('myPreset3') && <button className='preset-btn'>Включить пресет №3</button>}
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
		</div>
	)
}

export default User