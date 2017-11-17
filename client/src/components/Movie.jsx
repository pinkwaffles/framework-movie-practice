import React from 'react';
import $ from 'jquery';

const Movie = (props) => {
	console.log(props.movie.title);
	return (
		<div>
			<li>{props.movie.title} <input id="watched" value='watched' type="checkbox"/></li>
		</div>
	)
}

export default Movie;