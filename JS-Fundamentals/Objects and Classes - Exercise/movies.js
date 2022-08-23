function movies(moviesArr) {
  let movieList = [];

  for (let movieInfo of moviesArr) {
    let commandLine = movieInfo.split(" ");
    let currMovie = null;

    if (commandLine.includes("addMovie")) {
      let addCommand = commandLine.shift();
      currMovie = commandLine.join(" ");

      movieList.push({ name: currMovie });
    } else if (commandLine.includes("directedBy")) {
      let [currMovie, director] = movieInfo.split(" directedBy ");

      for (let el of movieList) {
        if (el.name == currMovie) {
          el.director = director;
        }
      }
    } else if (commandLine.includes("onDate")) {
      let [currMovie, date] = movieInfo.split(" onDate ");

      for (let el of movieList) {
        if (el.name == currMovie) {
          el.date = date;
        }
      }
    }
  }

  for (let movie of movieList) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
