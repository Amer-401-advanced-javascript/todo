import React from 'react';

function TodoList (props) {


    return (
      <ul>
        {props.list.map(item => (
          <li
            // className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {console.log(item)}
              
              {item.item}
            </span>
          </li>
        ))}
      </ul>
    );
}

export default TodoList;
