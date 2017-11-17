import React from 'react';
import $ from 'jquery';

const Search = (props) => {
	return (
		<div>
			<input type='text' id='userSearchMovie' />
			<button type='button' onClick={() => {props.searchList($('#userSearchMovie').val())}}>
				Search
			</button>
		</div>
	)
}

export default Search;