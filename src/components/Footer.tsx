import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>

			<div className='page-footer'>

				<div className="container row links">
					<div className="sections hide-on-med-and-down">
						<h4>Разделы</h4>
						<ul>
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/">Телеканалы</Link></li>
							<li><Link to="/">Фильмы</Link></li>
							<li><Link to="/">Сериалы</Link></li>
						</ul>
					</div>

					<div className="help">
						<h4>Помощь</h4>
						<ul>
							<li><a href="#!">Справка</a></li>
							<li><a href="#!">Обратная связь</a></li>
							<li><a href="#!">Пользовательское соглашение</a></li>
							<li><a href="#!">Корпоративный сайт</a></li>
						</ul>
					</div>
				</div>

				<div className="container footer-right-side">
					<img alt='Мобильное приложение' src='./qr.svg' className="mobile-qr" />
					<div className="contacts-cr">
						<span className="contacts">app@kion.ru 8 800 250-08-04</span>
						<span className="copyright">© 2023 ПАО «МТС». Все права защищены. 12+</span>
					</div>
				</div>

			</div>
			<div
				className='show-on-medium-and-down'
				style={{ height: '3em', position: 'fixed', bottom: '0', left: '0' }}
				>
			</div>
		</footer>
	)
}

export default Footer