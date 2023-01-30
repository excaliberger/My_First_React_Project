import React, { Component } from 'react';

function FilmsList() {
    

    let [list, setList] = React.useState([]);

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


    function renderList() {
        return list.map((film) => {
            return (<li key={film.id}>{film.title}</li>)
        })
    }; 

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default FilmsList;