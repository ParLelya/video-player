import React from 'react'
import { Link } from 'react-router-dom'

const NavMobile: React.FC = () => {

	return (
		<nav className="nav-mobile show-on-medium-and-down">
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>home</i><br />
				Главная
			</Link>
			<Link to="/mediaplayer/1">
				<i className="material-icons" style={{ fontSize: '2rem' }}>live_tv</i><br />
				ТВ
			</Link>
			<Link to="/mediaplayer/2">
				<i className="material-icons" style={{ fontSize: '2rem' }}>local_movies</i><br />
				Фильмы
			</Link>
			<Link to="/mediaplayer">
				<i className="material-icons" style={{ fontSize: '2rem' }}>video_library</i><br />
				Сериалы
			</Link>
			<Link to="/myprofile">
				<i className="material-icons" style={{ fontSize: '2rem' }}>account_circle</i><br />
				Ещё
			</Link>
			<Link to="/accessibility">
				<i className="material-icons" style={{ fontSize: '2rem' }}>settings_accessibility</i><br />
				Доступность
			</Link>
		</nav>
	)
}

export default NavMobile