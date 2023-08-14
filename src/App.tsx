import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import { PrivateRoute, UnPrivateRoute } from "./middleware/PrivateRoutes";
import Home from "./pages/Home";
import Logout from "./pages/Auth/Logout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
