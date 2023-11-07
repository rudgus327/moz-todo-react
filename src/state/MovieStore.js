import {action,makeObservable,observable} from "mobx";

class Movie{
    id;
    title;
    rate;

    constructor(id,title,rate){
        this.id;
        this.title;
        this.rate;
    }
}

export class MovieStore{ //repository

    rootStore; 

    movies=[];

    constructor(root){
        makeObservable(this, {
            movies:observable, 
            createMovie:action,
            deleteMovie:action,
            changeRate:action,

        })
        this.rootStore=root;

        this.movies = [
            new Movie(1,'LOTR',5),
            new Movie(2,'LOTR2',3),
            new Movie(3,'LOTR3',1),
        ]
    }

    createMovie(title,rate){
        this.movies = [
            ...this.movies, //deep copy
            new Movie(this.movies[this.movies.length-1].id+1,title,rate)
        ]
    }

    deleteMovie(id){
        this.movies = this.movies.filter(x => x.id !== id);
    }

    changeRate(id,rate){
        const idx = this.movies.findIndex(x => x.id === id);
        const movie = this.movies[idx];

        this.movies = [
            ...this.movies.slice(0,idx),
            new Movie(movie.id,movie.title,rate),
            ...this.movies.slice(idx+1,this.movies.length),
        ]
    }
}