import React from 'react'

const Home = () => {
	return (
		<div style={{ maxWidth: '90vw' }}>
			<div className='posters'>
				<div className='posters-title'>
					<h3>Новинки</h3>
					<a href='!'>Смотреть все <i className="large material-icons" style={{ fontSize: '1rem' }}>chevron_right</i></a>
				</div>
				<div className='posters-images'>
					<img
						src='./card1.svg'
						alt='new films and series'
					/>
					<img
						src='./card2.svg'
						alt='new films and series'
					/>
					<img
						src='./card3.svg'
						alt='new films and series'
					/>
					<img
						src='./card4.svg'
						alt='new films and series'
					/>
					<img
						src='./card5.svg'
						alt='new films and series'
						className='hide-on-med-and-down'
					/>
					<img
						src='./card6.svg'
						alt='new films and series'
						className='hide-on-med-and-down'
					/>
				</div>
			</div>

			<img
				src='./banner.svg'
				alt='banner'
				style={{ marginTop: '2rem', width: '95%' }}
			/>
			<img
				src='./tv.svg'
				alt='free tv channels'
				style={{ marginTop: '2rem', width: '95%' }}
			/>
		</div>
	)
}

export default Home