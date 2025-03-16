import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute = ({ children, adminOnly = false }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; // Redirect if not logged in
  if (adminOnly && user.role !== "Admin") return <Navigate to="/dashboard" />; // Restrict access

  return <>{children}</>;
};

export default ProtectedRoute;