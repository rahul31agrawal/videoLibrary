import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./authContext";

export function RequiresAuth({ children }) {
    const location = useLocation();
    const { auth } = useAuthContext();
    const token = auth.token || localStorage.getItem("token");
  
    return token ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    );
  }