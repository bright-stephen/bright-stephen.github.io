document.addEventListener("DOMContentLoaded", function () {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = 'd670363ccc708f99dc53da9bcc8406d7';
  const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  // Fetch data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display top 25 movies in the HTML
      displayMovies(data.results.slice(0, 25));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');

    // Loop through each movie and create elements to display movie details
    movies.forEach((movie, index) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('col');
      movieCard.classList.add('border-1');
      movieCard.classList.add('border');
      movieCard.classList.add('border-danger');
      movieCard.classList.add('p-3');
      movieCard.classList.add('rounded-4');
      movieCard.classList.add('shadow-lg');
      movieCard.classList.add('p-3');
      movieCard.classList.add('mb-5');
      movieCard.classList.add('rounded-2');
      movieCard.classList.add('border');
      movieCard.classList.add('bg-primary');
      
      
      

      if (index === 0) {
        // If it's the first movie, add a special class to make it occupy a full row
        movieCard.classList.add('full-row');
      }

      const posterElement = document.createElement('img');
      posterElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      posterElement.alt = movie.title;
      // Add Bootstrap class for responsive images
      posterElement.classList.add('img-fluid');

      const movieDetails = document.createElement('div');
      movieDetails.classList.add('movie-details');

      const titleElement = document.createElement('h3');
      titleElement.textContent = movie.title;

      // Add click event to each movie title
      titleElement.addEventListener('click', function () {
        // Fetch detailed movie information and display it
        fetchMovieDetails(movie.id);
      });

      const overviewElement = document.createElement('p');
      overviewElement.textContent = movie.overview;
      overviewElement.style.fontSize = '14px';

      const releaseDateElement = document.createElement('p');
      releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
      releaseDateElement.style.fontWeight = 'bold';

      // Append elements to the movie card
      movieCard.appendChild(posterElement);
      movieDetails.appendChild(titleElement);
      movieDetails.appendChild(overviewElement);
      movieDetails.appendChild(releaseDateElement);

      // Append movie details to the movie card
      movieCard.appendChild(movieDetails);

      // Append the movie card to the container
      moviesContainer.appendChild(movieCard);
    });
  }

  function fetchMovieDetails(movieId) {
    // Use the movieId to fetch detailed movie information
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    fetch(movieDetailsUrl)
      .then(response => response.json())
      .then(movieDetails => {
        // Display detailed movie information (you can customize this part)
        alert(`Detailed Information for ${movieDetails.title}:\n${movieDetails.overview}`);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }
});