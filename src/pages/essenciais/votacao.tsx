import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {
  const [dados, setDados] = useState({ votosRoxo: 0, votosVerde: 0 });

  function votoRoxo() {
    setDados((dadosAtuais) => {
      return {
        votosRoxo: dadosAtuais.votosRoxo + 1,
        votosVerde: dadosAtuais.votosVerde,
      };
    });
  }

  function votoVerde() {
    setDados((dadosAtuais) => {
      return {
        votosRoxo: dadosAtuais.votosRoxo,
        votosVerde: dadosAtuais.votosVerde + 1,
      };
    });
  }

  function zerarVotos() {
    setDados({
      votosRoxo: 0,
      votosVerde: 0,
    });
  }

  return (
    <Pagina titulo="Votação" subtitulo="Usando Estado com Objeto">
      <Flex col center>
        <Display
          texto="Qual a melhor cor?"
          textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
        />
        <Flex gap={5}>
          <Botao cor="bg-green-600" onClick={votoVerde} redondo tamanho="2xl" />
          <Botao cor="bg-purple-600" onClick={votoRoxo} redondo tamanho="2xl" />
        </Flex>
        <Botao
          texto="zerar"
          cor="bg-gray-600"
          onClick={zerarVotos}
          tamanho="lg"
        />
      </Flex>
    </Pagina>
  );
}
