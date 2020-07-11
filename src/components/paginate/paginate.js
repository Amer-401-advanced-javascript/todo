import React, { useContext } from "react";
import { SettingContext } from "../../context/setting/context";
// import { Link } from 'react-router-dom';

function Paginate(props) {
  const context = useContext(SettingContext);
  const pageNumbers = [];  

  for (
    let i = 1;
    i <= Math.ceil(props.list.length / context.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul>
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <a href="#" onClick = {() => { context.setCurrentPage(number)}}>{number}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Paginate;
