import React from "react";

import { logout } from "../../../services/auth";

const Logout: React.FC = () => {
  logout();

  return null;
};

export default Logout;
