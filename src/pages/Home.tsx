import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'

export const DEFAULT_THEME = 'default'

export function applyTheme(theme: string) {
	document.body.classList.remove("default", 'fz-increase', 'grayscale', 'protanopia', 'deuteranopia', 'tritanopia')
	document.body.classList.add(`${theme}`)
}

const Home: React.FC = () => {

	const { isAuth } = useAppSelector((state: RootState) => state.user)

	useEffect(() => {
		if (isAuth) {

			let activeTheme = localStorage.getItem('accessibilityPreset') || DEFAULT_THEME
			applyTheme(activeTheme)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div style={{ maxWidth: '90vw' }}>
			<div className='posters'>
				<div className='posters-title'>
					<h3>Новинки</h3>
					<a href='!'>Смотреть все <i className="large material-icons" style={{ fontSize: '1rem' }}>chevron_right</i></a>
				</div>
				<div className='posters-images'>
					<Link to="/mediaplayer">
						<img
							src='./card1.svg'
							alt='new films and series'
						/>
					</Link>
					<Link to="/mediaplayer">
						<img
							src='./card2.svg'
							alt='new films and series'
						/>
					</Link>
					<Link to="/mediaplayer">
						<img
							src='./card3.svg'
							alt='new films and series'
						/>
					</Link>

					<Link to="/mediaplayer">
						<img
							src='./card4.svg'
							alt='new films and series'
						/>
					</Link>
					<Link to="/mediaplayer" className='hide-on-med-and-down'>
						<img
							src='./card5.svg'
							alt='new films and series'
						/>
					</Link>
					<Link to="/mediaplayer" className='hide-on-med-and-down'>
						<img
							src='./card6.svg'
							alt='new films and series'
						/>
					</Link>
				</div>
			</div>

			<img
				src='./banner.svg'
				alt='banner'
			/>
			<img
				src='./tv.svg'
				alt='free tv channels'
				className='hide-on-med-and-down'
			/>
			<img
				src='./tv-mob.svg'
				alt='free tv channels'
				className='show-on-medium-and-down'
			/>
		</div>
	)
}

export default Home