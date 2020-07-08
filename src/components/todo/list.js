import React from 'react';

function TodoList (props) {


    return (
      <ul>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>              
              {item.text}
            </span>
            <button onClick ={ () =>{ props.handleDelete(item._id)}}>delete</button>
          </li>
        ))}
      </ul>
    );
}

export default TodoList;
