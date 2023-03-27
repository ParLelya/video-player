import React, { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setIsAuth } from '../slices/userSlice'
import { RootState } from '../store/store'

const User: React.FC = () => {

	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state: RootState) => state.user)

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