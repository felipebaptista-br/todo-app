import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Item from "./Components/item";

function App() {
  const [itens, setItens] = useState([]);
  const [filterItens, setFilterItens] = useState({ filter: false, active: true });

  function getData() {
    fetch('http://localhost:3000/todo/list', { method: "GET" })
      .then(response => response.json())
      .then(data => setItens(data))
  }

  function insertDocument() {
    fetch("http://localhost:3000/todo/add", { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ "text": "", "edit": false, "active": true }) })
      .then(response => response.json())
      .then(() => getData());
  }

  function updateDocument(item) {
    fetch("http://localhost:3000/todo/update", { method: "PATCH", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(item) })
      .then(response => response.json())
      .then(() => getData());
  }

  function deleteDocument(item) {
    fetch("http://localhost:3000/todo/delete", { method: "DELETE", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(item) })
      .then(response => response.json())
      .then(() => getData());
  }

  useEffect(() => {
    getData();
  }, []);

  const itensToShow = filterItens.filter ? itens.filter(item => item.active === filterItens.active) : itens

  return (
    <div className="wrapper">
      <div className="todo-list">
        <h1>To Do App</h1>

        {itensToShow.map(item => {
          return <Item item={item} updateDocument={updateDocument} deleteDocument={deleteDocument} />
        })}

        <div className="button-row">
          <button
            onClick={() => setFilterItens({ filter: false })}
            style={filterItens.filter ? {} : { fontWeight: "bold" }}
          >Todos</button>
          <button
            onClick={() => setFilterItens({ filter: true, active: true })}
            style={(filterItens.filter && filterItens.active === true) ? { fontWeight: "bold" } : {}}
          >Pendentes</button>
          <button
            onClick={() => setFilterItens({ filter: true, active: false })}
            style={(filterItens.filter && filterItens.active === false) ? { fontWeight: "bold" } : {}}
          >Concluídos</button>
        </div>

        <div className="button-row">
          <button onClick={insertDocument}>Inserir novo To-do</button>
        </div>

      </div >
    </div>

  );
}

export default App;
