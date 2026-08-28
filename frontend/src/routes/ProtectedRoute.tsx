import { Navigate } from "react-router-dom";

import { auth } from "../firebase";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: Props) {

  return auth.currentUser
    ? children
    : <Navigate to="/login" />;
}