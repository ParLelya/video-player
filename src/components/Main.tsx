import React from 'react'
import { Route, Routes } from "react-router-dom";
import Accessibility from '../pages/Accessibility';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import User from './../pages/User';
import EpilepsyFriendly from '../pages/EpilepsyFriendly';
import CommonPlayer from '../pages/CommonPlayer';

const Main: React.FC = () => {
	return (
		<main className="valign-wrapper center-align">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/accessibility' element={<Accessibility />} />
				<Route path='/mediaplayer/1' element={<CommonPlayer />} />
				<Route path='/mediaplayer/2' element={<EpilepsyFriendly />} />
				<Route path='/myprofile' element={<User />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default Main