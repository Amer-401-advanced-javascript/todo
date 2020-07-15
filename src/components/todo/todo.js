import React, { useState, useEffect, useContext } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../hooks/ajaxHook";
import Paginate from '../paginate/paginate'
import { SettingContext } from "../../context/settings/context";

import "./todo.scss";
let url = "https://lab-32.herokuapp.com/todo";

function ToDo() {
  const siteContext = useContext(SettingContext);
  const [list, setList] = useState([]);
  const [getNote, postNote, putNote, deleteNote] = useAjax();
  
  const addItem = (item) => {
    item.complete = false;
    postNote(url, item);
    setList([...list, item]);
  };

  const toggleComplete = (id) => {
    let item = list.filter((item) => item._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let listItems = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList(listItems);
    }
    putNote(url, item);
  };
  const deleteItem = (id) => {
    deleteNote(url, id);
  };

  useEffect(() => {
    const fetch = async () => {
      let list = await getNote(url);
      setList(list);
    };
    fetch();
  },[]);

  return (
    <>
      <header>
        <h2>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header>
      <button className="show-hide" onClick={()=>siteContext.setCompleted(!siteContext.completed)}>
        DisplayAll/Hide
      </button>
          <Paginate list = {list} />

      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;
