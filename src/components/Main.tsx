import React from 'react'
import { Route, Routes } from "react-router-dom";
import VideoPlayer from '../pages/VideoPlayer';
import Accessibility from '../pages/Accessibility';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import User from './../pages/User';

const Main: React.FC = () => {
	return (
		<main className="valign-wrapper center-align">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/accessibility' element={<Accessibility />} />
				<Route path='/mediaplayer' element={<VideoPlayer />} />
				<Route path='/myprofile' element={<User />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default Main