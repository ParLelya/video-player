import React from 'react';
import './styles/style.css'
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import NavMobile from './components/NavMobile';

function App() {
	return (
		<div className="App">
			<img src='./filters.svg' alt='' className='filter'/>
			<Navigation />
			<Main />
			<Footer />
			<NavMobile/>
		</div>
	);
}

export default App;
