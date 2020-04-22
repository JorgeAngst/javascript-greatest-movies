// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg")

  const movieGenre = spielbergMovies.map(movie => movie.genre.includes("Drama"))

  let count = 0

  movieGenre.map(drama => drama == true ? count += 1 : 0) 

  return count
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {

  if (movies.length === 0) {
    return 0;
  } else {
    const rate = movies.reduce((sum, movie) => {
        return (sum + movie.rate);
    }, 0);
    const avgRate = (rate / movies.length).toFixed(2)
    return parseFloat(avgRate)
  }
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
  const duration = movies.filter(movie => 
    movie.duration = parseInt(movie.duration.slice(0, 1) * 60) + parseInt(movie.duration.slice(2, -3) == '' ? ' 0' : movie.duration.slice(2, -3))
  ) 
  return duration  
} 

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  return orderByYear(movies)
} 

console.log(bestYearAvg(movies))