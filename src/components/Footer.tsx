import React from 'react'

const Footer = () => {
	return (
		<footer className='page-footer'>
			<div className="container">
				<div className="row">
					<div className="col l4 offset-l2 s12">
						<h5>Разделы</h5>
						<ul>
							<li><a href="#!">Главная</a></li>
							<li><a href="#!">Телеканалы</a></li>
							<li><a href="#!">Фильмы</a></li>
							<li><a href="#!">Сериалы</a></li>
						</ul>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5>Помощь</h5>
						<ul>
							<li><a href="#!">Справка</a></li>
							<li><a href="#!">Обратная связь</a></li>
							<li><a href="#!">Пользовательское соглашение</a></li>
							<li><a href="#!">Корпоративный сайт</a></li>
						</ul>
					</div>
					<img className="col l4 offset-l2 s12" alt='Мобильное приложение' src='./qr.svg' />
				</div>
			</div>
		</footer>
	)
}

export default Footer