import { useEffect } from "react"

interface Props {
  url: string
}

function RedirectPage(props: Props) {
  const { url } = props;
  
  useEffect(() => {
    window.location.href = `${url}`
  }, [])

  return null;
}

export default RedirectPage
