import React from 'react';
import VideoListItem from './video_list_item';

// functional component
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	});
	return (
		<ul>
			{videoItems}
		</ul>
	);
};

export default VideoList;
