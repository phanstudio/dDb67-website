import { Navigate, useLocation } from "react-router-dom"

export default function NotFoundRedirect() {
  const location = useLocation()
  return <Navigate to={{ pathname: "/", search: location.search }} replace />
}
