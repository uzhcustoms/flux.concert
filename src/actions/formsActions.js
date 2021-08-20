import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function addConcert(concert) {
  dispatcher.dispatch({
    actionType: actionTypes.ADD_CONCERT,
    newConcert: concert,
    title: "concert"
  });
}

export function addSpectacl(spectacl) {
  dispatcher.dispatch({
    actionType: actionTypes.ADD_SPECTACL,
    newSpectacl: spectacl,
    title: "spectacl"
  });
}

export function addMovie(movie) {
  dispatcher.dispatch({
    actionType: actionTypes.ADD_MOVIE,
    newMovie: movie,
    title: "movie"
  });
}



