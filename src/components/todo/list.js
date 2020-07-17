import React, { useContext } from 'react';
import { SettingContext } from '../../context/settings/context';
import Auth from '../../context/auth/auth';

function TodoList(props) {
  const context = useContext(SettingContext);

  const indexOfLastPost = context.currentPage * context.itemsPerPage;
  const indexOfFirstPage = indexOfLastPost - context.itemsPerPage;
  const currentPost = props.list.slice(indexOfFirstPage, indexOfLastPost)

  return (
      <ul>
        {currentPost.filter(item => context.completed ? true : item.complete)
          .map(item =>
            <li key={item._id}
              className={`complete-${item.complete.toString()}`}
            >
              <Auth capability='read'>
                <span onClick={() => props.handleComplete(item._id)}>
                  {item.text}
                </span>
              </Auth>
              <Auth capability='delete'>
                <button onClick={() => { props.handleDelete(item._id) }}>Delete Note</button>
              </Auth>
            </li>

          )}
      </ul>
  );
}

export default TodoList;