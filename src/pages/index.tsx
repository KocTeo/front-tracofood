import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Home() {
  const route = useRouter();
  
  useEffect(() => {
    route.push('/login')
  });

  return (
    <>
      <h1>Agora vai</h1>
    </>
  )
}
