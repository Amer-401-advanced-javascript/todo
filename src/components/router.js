import React from "react";
import { Route } from "react-router-dom";
import ToDo from "./todo/todo.js";

const Routes = (props) => {
  return(
  <main>
    <Route path="/" exact>
      <ToDo />
    </Route>
  </main>
  )
};

export default Routes;
