import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useState, useRef } from "react";

export default function () {
  const qtdCaracteres = 400;
  const [caracteresRestantes, setCaracteresRestantes] = useState(qtdCaracteres);

  const refTexto = useRef<any>();
  const contador = useRef<any>();

  function iniciaContador() {
    clearTimeout(contador.current);

    contador.current = setTimeout(() => {
      let qtdCaracteresDigitados = refTexto.current.value.length;

      setCaracteresRestantes(qtdCaracteres - qtdCaracteresDigitados);
    }, 1000);
  }

  return (
    <Pagina
      titulo="Contagem de Caracteres"
      subtitulo="Usando uma referencia para controlar o tempo"
    >
      <Display
        texto="Digite o texto"
        textoComplementar={`${caracteresRestantes} caracteres restantes`}
      />
      <textarea
        ref={refTexto}
        onInput={iniciaContador}
        className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}
      ></textarea>
    </Pagina>
  );
}
