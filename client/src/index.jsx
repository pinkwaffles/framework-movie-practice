import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
			showMovies: []
    }
  }

  searchMovieList (movieToSearch) {
  	var movieInList = [];
  	this.state.movies.forEach((movie) => {
  		if (movie.title.includes(movieToSearch)){
  			movieInList.push(movie);
  		}
  	});
  	if (movieInList.length === 0) {
  		alert('I\'m sorry, the movie you requested is not in the list.');
  	} else {
  		this.setState({showMovies: movieInList});
  	}
  }

  componentWillMount () {
    this.getMovies();
  }

  getMovies () {
    $.ajax({
      url: '/movies',
      method: 'GET',
      success: (data) => {
        console.log(`received ${data}`)
        this.setState({showMovies: data});    
      },
      error: (err) => {
        console.log(`Error in getting data ${err}`);
      }
    })
  }

  addMovie (movieTitle) {
    $.ajax({
      url: '/movie',
      method: 'POST',
      data: {title: movieTitle},
      success: (data) => {
        this.getMovies();
      },
      error: (err) => {
        console.log('this is post error', JSON.stringify(err));
      }
    })
  }

  render() {
    return (
      <div>
      	<Search searchList = {this.searchMovieList.bind(this)} />
        <AddMovie addMovie={this.addMovie.bind(this)} />
      	<ul>
	      	{this.state.showMovies.map((movie) => {
	      		console.log(`Trying to mount ${JSON.stringify(movie)}`);
	      		return <Movie movie={movie} />
	      	})}
      	</ul>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
