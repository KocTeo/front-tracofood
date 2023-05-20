import { LoginImage } from "@/components/Organisms/LoginImage";
import { RegisterLayoutStyle } from "./style";
import { RegisterContainer } from "@/components/Organisms/RegisterContainer";


export const RegisterLayout: React.FC = () => {
  return (
    <RegisterLayoutStyle>
      <LoginImage />
      <RegisterContainer />
    </ RegisterLayoutStyle>
  )
}