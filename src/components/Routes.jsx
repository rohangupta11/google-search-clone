import React from "react";
import Results from "./Results"; 
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Error from "./Error";
const Routes = () => {
  return <div className="p-4">
    <Switch>
      <Route exact path="/" element={<Navigate replace to="/search" />} />
      {['/search','/image','/video','/news'].map((path) => (
        <Route exact path={path} element={<Results />} />
      ))}
      <Route path="/*" element={<Error />} />

    </Switch>
  </div>;
};

export default Routes;
