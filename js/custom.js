$(document).ready(function(){
	// Listen to the button click event
	$('#submitInputs').on('click', function(){
		// Get the movie title from the textbox
		let movieTitle = $('#movieTitle').val();
		let apikey = '49b7e5d8';
		
		//console.log('http://www.omdbapi.com/');
		// Call the OMDb API using Ajax
		$.ajax({
			url: 'http://www.omdbapi.com/',
			method: 'GET',
			data: {
				t: movieTitle,
				apikey: apikey
			},
			success: function(movie){
				$('#movie').empty();
				if (movie.Response == 'True') {
				$('#movie').html(`
					<div class="card">
						<h5 class="card-header text-white bg-success">${movie.Title}</h5>
						<div class="card-body">
							<div class="row">
								<div class="col-md-3">
									<img class="thumbnail" src="${movie.Poster}">
								</div>
								<div class="col-md-9">
									<ul class="list-group">
										<li class="list-group-item"><strong>Title: </strong>${movie.Title}</li>
										<li class="list-group-item"><strong>Year: </strong>${movie.Year}</li>
										<li class="list-group-item"><strong>Rated: </strong>${movie.Rated}</li>
										<li class="list-group-item"><strong>Released: </strong>${movie.Released}</li>
										<li class="list-group-item"><strong>Runtime: </strong>${movie.Runtime}</li>
										<li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
										<li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
										<li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
										<li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
										<li class="list-group-item"><strong>Plot: </strong>${movie.Plot}</li>
										<li class="list-group-item"><strong>Language: </strong>${movie.Language}</li>
										<li class="list-group-item"><strong>Country: </strong>${movie.Country}</li>
										<li class="list-group-item"><strong>Awards: </strong>${movie.Awards}</li>
										<li class="list-group-item"><strong>Ratings: </strong>${movie.Ratings}</li>
										<li class="list-group-item"><strong>Metascore: </strong>${movie.Metascore}</li>
										<li class="list-group-item"><strong>imdbRating: </strong>${movie.imdbRating}</li>
										<li class="list-group-item"><strong>imdbVotes: </strong>${movie.imdbVotes}</li>
										<li class="list-group-item"><strong>imdbID: </strong>${movie.imdbID}</li>
										<li class="list-group-item"><strong>Type: </strong>${movie.Type}</li>
										<li class="list-group-item"><strong>DVD: </strong>${movie.DVD}</li>
										<li class="list-group-item"><strong>BoxOffice: </strong>${movie.BoxOffice}</li>
										<li class="list-group-item"><strong>Production: </strong>${movie.Production}</li>
										<li class="list-group-item"><strong>Website: </strong><a href="${movie.Website}">${movie.Website}</a></li>
										<li class="list-group-item"><strong>Response: </strong>${movie.Response}</li>
										
									</ul>
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