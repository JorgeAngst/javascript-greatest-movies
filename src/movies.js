// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))

  return spielbergDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let totalRate = 0;
  if (movies.length > 0) {
    movies.reduce((sum, movie) => {
      if (!movie.rate) {
        return 0;
      } else {
        return (totalRate = sum + movie.rate);
      }
    }, 0);
  } else {
    return 0;
  }
  let avgRate = parseFloat((totalRate / movies.length).toFixed(2))
  return avgRate
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  
  return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  const moviesByYear = [...movies]

  
  moviesByYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1
    } else {
      return a.title.localeCompare(b.title)
    }
  })
  
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const titles = movies.map(movie => movie.title) 

  titles.sort()

  if (titles.length < 20) {
    return titles;
  } else {
    return titles.splice(0,20)
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  
  let newMoviesArray = JSON.parse(JSON.stringify(movies));

  const movieDurationFixed = newMoviesArray.map(movie => {
    let hours = 0;
    let minutes = 0;
    let time = movie.duration.split('');
      
    if (time.includes('h')) {
      hours = parseInt(movie.duration.slice(0, time.indexOf('h')) * 60);
    }
    if (time.includes('m')) {
      minutes = parseInt(movie.duration.slice(time.indexOf(' ') + 1, time.indexOf('m')));

    }
    movie.duration = hours + minutes;
    return movie
  })
  return movieDurationFixed
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  const yearFilter = movies.map(movie => 
    {
      return {
        year: movie.year,
        rate: movie.rate}
    })
  // const byYear = yearFilter.filter((movie, index, yearFilter) => 
  // console.log(yearFilter.indexOf(movie.year))
  // ) 
  
  return byYear
} 

