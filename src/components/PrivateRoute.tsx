

import type { ReactNode } from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import type { RootState } from "../Redux/store"; // type of state


interface OpenRouteProps {
  children: ReactNode;
}

const PrivateRoute:React.FC<OpenRouteProps> = ({ children }) => {

  const { token } = useSelector((state:RootState) => state.auth);

  // console.log("Printign the user form private route==>",user);
  // console.log("Printign the token form private route==>",token);

  // Home la login t
  if (!token) {
    return <Navigate to="/login" replace />;
  }

 

  return children; // if user is authorized then --> render components
};

export default PrivateRoute;
