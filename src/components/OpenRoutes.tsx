
import type { ReactNode } from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../Redux/store"; // type of auth 


interface OpenRouteProps {
  children: ReactNode;
}

const OpenRoute: React.FC<OpenRouteProps> = ({ children }) => {

  // const { token } = useSelector((state) => state.auth);
  const { token } = useSelector((state: RootState) => state.auth);
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default OpenRoute;
