import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

class App extends Component {
	constructor(props) {
			super(props);
			this.state = { videos: [] };
			YTSearch({key: API_KEY, term: 'game'}, (videos) => {
				this.setState({ videos });
			});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
