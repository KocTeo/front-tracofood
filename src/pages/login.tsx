import { Input } from "@/components/Atoms/Input";

export default function Login() {
  return (
    <>
      <Input 
        type="text"
        placeholder="Seu email"
      />
      <Input 
        type="password"
        placeholder="senha"
      />
    </>
  )
}
