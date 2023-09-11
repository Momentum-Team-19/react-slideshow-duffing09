import React, { useState } from "react";
import filmData from './film-data.json';
import './App.css'

const Slideshow = ({ filmIndex, setFilmIndex }) => {
const [films, setFilms] = useState(filmData);
const sortFilms = () => {
  const sorted_films = [...films];
  setFilms.sort(sorted_films)
}
const film = filmData[filmIndex]

const handleNextClick = () => {
  if (filmIndex < filmData.length -1) {
    setFilmIndex((prevIndex) => prevIndex + 1)
  }
}

const handleBackClick = () => {
  if (filmIndex > 0) {
    setFilmIndex((prevIndex) => prevIndex - 1)
  }
}

const handleStartOver = () => {
  setFilmIndex(0);
}
console.log(film)

  return (
    <div>
      <div className="fullBox">
        <h2>{film.title}</h2>
        <p>{film.original_title}</p>
        <img src={film.image} alt={film.title} />
        <p> Release Date: {film.release_date}</p>
        <p>Description: {film.description}</p>
        <button onClick={handleStartOver}>Refresh</button>
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}
  export default Slideshow;
  // return (
  //   <div>
  //     {filmData.map((film, index) => (
  //       <div className="container">
  //         <div className="fullBox">
  //           <div key={index} className="basicBox">
  //             <p className="FilmTitle">{film.title}</p>
  //             <p className="FilmJapanese">{film.original_title}</p>
  //             <p className="FilmDate">{film.release_date}</p>
  //             <p className="FilmDesc">{film.description}</p>
  //             <img className="FilmImg">{film.image}</img>
  //           </div>
  //         </div>
  //       </div>
  //     </>


  // NEXT STEPS
  // WORK ON 'NEXT' BUTTON
  // WORK ON 'BACK' BUTTON
  // WORK ON 'START OVER' BUTTON
  // AT END 'NEXT' BUTTON GOES GREY