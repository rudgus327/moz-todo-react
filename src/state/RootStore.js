import { MovieStore } from "./MovieStore";

export class RootStore{
    movieStore;

    constructor(){
        this.movieStore = new MovieStore(this); // root store에 가진 모든 store에 어떤 store던지 접근 가능하다
    }
}