import React from 'react'
import { Route, Routes } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import Accessibility from './Accessability';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Main = () => {
	return (
		<main className="valign-wrapper center-align">
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/accessibility' element={<Accessibility/>} />
				<Route path='/mediaplayer' element={<VideoPlayer />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default Main