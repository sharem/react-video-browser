import React from 'react';
import VideoListItem from './video_list_item';

// functional component
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		)
	});
	return (
		<ul className="video-list">
			{videoItems}
		</ul>
	);
};

export default VideoList;
