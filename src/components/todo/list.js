import React, {useContext} from 'react';
import {SettingContext} from '../../context/setting/context'

function TodoList (props) {
  const context = useContext(SettingContext);

  const indexOfLastPost = context.currentPage * context.itemsPerPage;
  const indexOfFirstPage = indexOfLastPost - context.itemsPerPage;
  const currentPost = props.list.slice(indexOfFirstPage, indexOfLastPost)
  
    return (
      <ul>
        {currentPost.filter( item => context.completed ? true : item.complete)
        .map(item => 

        <li key = {item._id}
        className ={`complete-${item.complete.toString()}`}
        >
           <span onClick={() => props.handleComplete(item._id)}>              
              {item.text}
            </span>
            <button onClick ={ () =>{ props.handleDelete(item._id)}}>delete</button>
        </li>

        )}
      </ul>
    );
}

export default TodoList;