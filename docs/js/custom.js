$(document).ready(function(){
	// Listen to the button click event
	$('#submitInputs').on('click', function(){

		$('#movie').empty();
		$('#movie').html('<img class="img-fluid" src="images/ajax-loader.gif">');

		// Get the movie title from the textbox
		let movieTitle = $('#movieTitle').val();
		let movieYear = $('#movieYear').val();
		let apikey = '49b7e5d8';
		let imdbURL = 'https://www.imdb.com/title/';

		//console.log('http://www.omdbapi.com/');
		// Call the OMDb API using Ajax
		$.ajax({
			url: 'https://www.omdbapi.com/',
			method: 'GET',
			data: {
				t: movieTitle,
				y: movieYear,
				apikey: apikey,
			},
			success: function(movie){
				let imdbMovieURL = imdbURL + movie.imdbID + '/';
				$('#movie').empty();
				if (movie.Response == 'True') {

					$('#movie').html(`
						<div class="card">
							<h5 class="card-header text-white bg-success">${movie.Title} (${movie.Year})</h5>
							<div class="card-body">
								<div class="row">
									<div class="col-md-3">
										<img class="img-fluid poster" src="${movie.Poster}"><br><br>
										<a target="_blank" class="btn btn-primary btn-block" href="${movie.Website}"> Website (if available)</a> <br>
										<a target="_blank" class="btn btn-danger btn-block" href="${imdbMovieURL}"> View On IMDb </a> <br>
									</div>
									<div class="col-md-6">
										<ul class="list-group">
											<li class="list-group-item"><strong>Title: </strong>${movie.Title}</li>
											<li class="list-group-item"><strong>Runtime: </strong>${movie.Runtime}</li>
											<li class="list-group-item"><strong>IMDb Rating: </strong>${movie.imdbRating}</li>
											<li class="list-group-item"><strong>IMDb Votes: </strong>${movie.imdbVotes}</li>
											<li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
											<li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
											<li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
											<li class="list-group-item"><strong>Plot: </strong>${movie.Plot}</li>
											<li class="list-group-item"><strong>Language: </strong>${movie.Language}</li>
											<li class="list-group-item"><strong>Awards: </strong>${movie.Awards}</li>
											<li class="list-group-item"><strong>Ratings: </strong>${movie.Ratings}</li>
										</ul>
										<br>
									</div>
									<div class="col-md-3">
										<div class="card">
											<h5 class="card-header text-white bg-warning">More Details</h5>
											<div class="card-body">
												<p><strong>Genre: </strong>${movie.Genre}</p>
												<p><strong>Rated: </strong>${movie.Rated}</p>
												<p><strong>Released: </strong>${movie.Released}</p>
												<p><strong>Country: </strong>${movie.Country}</p>
												<p><strong>IMDb ID: </strong>${movie.imdbID}</p>
												<p><strong>Type: </strong>${movie.Type}</p>
												<p><strong>DVD: </strong>${movie.DVD}</p>
												<p><strong>Released: </strong>${movie.Released}</p>
												<p><strong>Metascore: </strong>${movie.Metascore}</p>
												<p><strong>Response: </strong>${movie.Response}</p>
												<p><strong>BoxOffice: </strong>${movie.BoxOffice}</p>
												<p><strong>Production: </strong>${movie.Production}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					`);
				} else {
					$('#movie').html('No data found');
				}
			}
		});
	});
});
