import React from 'react'

const VideoPlayer = () => {
	return (
		<div>
			<video width="1104" controls muted>
				<source src="http://localhost:3000/video" type="video/mp4" />
			</video>
		</div>
	)
}

export default VideoPlayer