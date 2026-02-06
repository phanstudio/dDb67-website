import { useNavigate, useLocation } from "react-router-dom"

export function useGo() {
  const navigate = useNavigate()
  const location = useLocation()

  return (to: string) => {
    navigate({
      pathname: to,
      search: location.search,
    })
  }
}
