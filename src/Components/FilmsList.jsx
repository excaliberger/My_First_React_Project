import React, { Component } from 'react';

class FilmsList extends Component {
    constructor (props) {
        super (props);
        
        this.state = {
            list: [],
        }
    }

    getFilms() {
        fetch(
            `https://studioghibliapi-d6fc8.web.app/films`,
            { mode: "cors" }
        )
        .then((response) => response.json())
        .then((films) => {
            this.setState({list: films})
        }) 
        .catch ((err) => {console.error(err)})
    }

    componentDidMount() {
        this.getFilms();
    }

    renderList() {
        return this.state.list.map((film) => {
            return (<li key={film.id}>{film.title}</li>)
        })
    }; 
    
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
            );
    }
}

export default FilmsList;