import React, { Component } from 'react';
import { filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/film.helpers';
import { Link } from 'react-router-dom';


function FilmsPage() {
    
    let [list, setList] = React.useState([]);
    let [searchDirector, setSearchDirector] = React.useState("");

    let filmsByDirector = filterFilmsByDirector(list, searchDirector);
    let directors = getListOf(list, "director");
    let { avg_score, latest, total } = getFilmStats(filmsByDirector)

    React.useEffect(() => {
        getFilms()
    },[]);
    
    function getFilms() {
        fetch(
            `https://studioghibliapi-d6fc8.web.app/films`,
            { mode: "cors" }
        )
        .then((response) => response.json())
        .then((films) => {
            setList(films);
        }) 
        .catch ((err) => {console.error(err)})
    }

    function renderDirectors() {
        return directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })
    }

    function renderList() {
        return filmsByDirector.map((film) => {
            return (
                <li key={film.id}>
                    <Link to={`${film.id}`}> {film.title} </Link>
                </li>
                )
        })
    }; 

    filterFilmsByDirector(list, searchDirector);
    getListOf(list, "director")

    return (
        <div>
        <h1>Studio Ghibli Films</h1>
        <form>
            <label htmlFor="searchDirector">Filter By Director</label>
            <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
            >
            <option value="">All</option>
            {renderDirectors()}
            </select>
        </form>
        <div>
        <div>
            <span># Of Films</span>
            <span>{total}</span>
        </div>
        <div>
            <span>Average Rating</span>
            <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
            <span>Latest Film</span>
            <span>{latest}</span>
        </div>
        </div>
        <ul>
            {renderList()}
        </ul>
        </div>
    );
}

export default FilmsPage;