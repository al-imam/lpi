import { useAuth } from "@context/AuthContext";
import { Navigate } from "react-router-dom";

function Private({ children, path }) {
  const { currentUser } = useAuth();
  return currentUser === null ? <Navigate to={path} replace /> : children;
}

export default Private;
