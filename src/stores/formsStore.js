import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const CHANGE_EVENT = "change";
let eventsArr = [[],[],[]];
let eventTitle = ["Concert", "Spectacl", "Movie"];
let index = 0;

class EventStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getEventCity() {
    return eventsArr;
  }

  getEventTitle() {
    return eventTitle;
  }

  getIndex(ind) {
      index  = ind;
      return index
  }

  indexOut() {
      return index
  }
}

const eventStore = new EventStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.ADD_CONCERT:
      eventsArr[index].push({ id: uuidv4(), name: action.newConcert });
      console.log( eventsArr[index]);
      eventStore.emitChange();
      break;
    case actionTypes.ADD_SPECTACL:
      eventsArr[index].push({ id: uuidv4(), name: action.newSpectacl });
      console.log( eventsArr[index]);
      eventStore.emitChange();
      break;
    case actionTypes.ADD_MOVIE:
      eventsArr[index].push({ id: uuidv4(), name: action.newMovie });
      console.log( eventsArr[index]);
      eventStore.emitChange();
      break;
    default:
  }
});

export default eventStore;