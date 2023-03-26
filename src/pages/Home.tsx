import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

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
				style={{ marginTop: '2rem', width: '80%' }}
			/>
			<img
				src='./tv.svg'
				alt='free tv channels'
				style={{ margin: '2rem auto', width: '80%' }}
				className='hide-on-med-and-down'
			/>
			<img
				src='./tv-mob.svg'
				alt='free tv channels'
				style={{ margin: '2rem auto', width: '80%'}}
				className='show-on-medium-and-down'
			/>
		</div>
	)
}

export default Home