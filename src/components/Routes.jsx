import React from "react";
import Results from "./Results"; 
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Error from "./Error";
const Routes = () => {
  return <div className="p-4">
    <Switch>
      <Route exact path="/google-search-clone/" element={<Navigate replace to="/google-search-clone/search" />} />
      {['/google-search-clone/search','/google-search-clone/image','/google-search-clone/video','/google-search-clone/news'].map((path) => (
        <Route exact path={path} element={<Results />} />
      ))}
      <Route path="/*" element={<Error />} />

    </Switch>
  </div>;
};

export default Routes;
