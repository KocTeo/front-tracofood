import { Icon } from "@/components/Atoms/Icon"
import { FilterStyle } from "./style"
import { Button } from "@/components/Atoms/Button"
import { useRouter } from "next/router"

type FiltersType = {
  filter: Function
}

export const Filters: React.FC<FiltersType> = ({ filter }) => {
  const { pathname } = useRouter();
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
        <Icon alt="ordenar alfabeticamente" path="/alpha_order.svg" click={filter} />
        {pathname.includes('adm') ? (<Button width="148px" height="54px" click={test} name="Adicionar +"/>) : (<Icon alt="ordenar alfabeticamente" path="/price_filter.svg" click={filter} />)}
      </div>
    </FilterStyle>
  )
}