import React from 'react';
import './styles/style.css'
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
