import React from 'react';
import $ from 'jquery';

const AddMovie = (props) => {
	return (
		<div>
			<input type='text' id='newMovie' />
			<button type='button' onClick={() => {props.addMovie($('#newMovie').val())}}>
				Add movie
			</button>
		</div>
	)
}

export default AddMovie;