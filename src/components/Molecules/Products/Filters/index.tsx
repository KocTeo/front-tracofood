import { Icon } from "@/components/Atoms/Icon"
import { FilterStyle } from "./style"
import { Button } from "@/components/Atoms/Button"

export const Filters: React.FC = () => {
  const test = () => {
    console.log('test');
  }

  return (
    <FilterStyle>
      <div>
        <h2>Produtos</h2>
        <h2>Todos</h2>
      </div>
      <div>
        <Icon alt="ordenar alfabeticamente" path="/alpha_order.svg"/>
        <Button width="148px" height="54px" click={test} name="Adicionar +"/>
      </div>
    </FilterStyle>
  )
}