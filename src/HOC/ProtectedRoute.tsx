import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  logged: boolean;
  element: JSX.Element;
};

export const ProtectedRoute: React.FC<TProtectedRouteProps> = ({
  logged,
  element,
}) => {
  return logged ? element : <Navigate to="/signin" replace />;
};
