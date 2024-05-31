import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Pagina titulo="Basic useState" subtitulo="Example site react">
      <Flex gap={5}>
        <Botao onClick={handleClick} texto={`You pressed me ${count} times`} />
      </Flex>
    </Pagina>
  );
}
