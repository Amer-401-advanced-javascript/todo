import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/ajaxHook';

import './todo.scss';
let url = 'https://lab-32.herokuapp.com/todo'
function ToDo () {
  const [list, setList] = useState([]);
  const [getNote, postNote, putNote, deleteNote] = useAjax()
  
  const addItem = (item) => {
    // item._id = Math.random();
    item.complete = false;
    postNote(url, item)
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listItems = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listItems);
    }
    putNote(url,item)

  };
  const deleteItem = id => {
    let item = list.filter(value => value._id === id)[0] || {}    
    deleteNote(url, id)
  }

  
  useEffect(async() => {
  let list = await getNote(url)
  setList(list)
  }, [])

 

    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete = {deleteItem}
            />
          </div>
        </section>
      </>
    );
  }

export default ToDo;
