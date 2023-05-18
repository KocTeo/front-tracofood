import { LoginContainer } from "@/components/Organisms/LoginContainer";
import { LoginImage } from "@/components/Organisms/LoginImage";
import { LoginLayoutStyle } from "./style";


export const LoginLayout: React.FC = () => {
  return (
    <LoginLayoutStyle>
      <LoginImage />
      <LoginContainer />
    </ LoginLayoutStyle>
  )
}