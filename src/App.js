import React, { useState, useEffect } from "react";
import eventStore from "./stores/formsStore";
import * as forms from "./actions/formsActions";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';


function EventCity() {
 
  const [eventArr, setEventArr] = useState(eventStore.getEventCity());
  const [value, setValue] = useState("");
  const handlerChange = (event) => {
    setValue(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    
    forms.addConcert(value);
    setValue("");
  };

  useEffect(() => {
    eventStore.addChangeListener(onChangeStore);
    return () => {
      eventStore.removeChangeListener(onChangeStore);
    };
  }, []);
  function onChangeStore() {
    setEventArr(eventStore.getEventCity());
  }

  return (
    <div className="form">
      <h3>{eventStore.getEventTitle()[eventStore.indexOut()]}</h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={value}
          placeholder={eventStore.getEventTitle()[eventStore.indexOut()]}
          onChange={handlerChange}
        />
        <input type="submit" value="Добавить события" />
      </form>
      <div className="texts">
        {eventArr[eventStore.indexOut()].map((item) => (
          <p className="text" key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}


function City() {
    const handlerClick = (event)=> {
    eventStore.getIndex(event.target.id);
    console.log(eventStore.getEventTitle()[eventStore.indexOut()]);
}
  return (
    <div className="city">
      <Link id="0" onClick={handlerClick} to="/concert" className="links">
        Concert
      </Link>
      <Link id="1"  onClick={handlerClick} to="/spectacl" className="links">
        Spectacl
      </Link>
      <Link id="2" onClick={handlerClick} to="/movie" className="links">
        Movie
      </Link>
      
    </div>
  );
}

function About() {
return (
  <div className="citys">
      <h2>События города</h2>
      <p>Го́род — крупный населённый пункт, жители которого заняты, как правило, не сельским хозяйством. Имеет развитый комплекс хозяйства и экономики. Является скоплением архитектурных и инженерных сооружений, обеспечивающих жизнедеятельность постоянного и временного населения города.
        Исторически термин происходит от наличия вокруг поселения оборонительной ограды — вала или стены. В Древней Руси городом называлось всякое крупное жилое место, окружённое такой оградой. Города служили центром развития искусства и ремёсел, технических достижений.
        Разрастаясь, города образуют городские агломерации. Особенно важную роль для стран и континентов играют столицы, а также города-миллионники или агломерации-миллионеры[en] (имеющие численность населения более 1 миллиона человек), в том числе мегалополисы и глобальные города.</p>
  </div>
)
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <City />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/concert" component={EventCity} />
            <Route path="/spectacl" component={EventCity} />
            <Route path="/movie" component={EventCity} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}





