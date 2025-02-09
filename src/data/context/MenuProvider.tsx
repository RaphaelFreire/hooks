"use client";

import { createContext, useEffect, useState } from "react";
import secoesMenu from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSecao";

const ContextoMenu = createContext({} as any);

export function MenuProvider(props) {
  const [mini, toggleMini, miniTrue] = useBoolean(false);
  const [secoes, setSecoes] = useState<any>(secoesMenu);

  let tamanho = useTamanhoJanela();

  const router = useRouter();

  //md sm
  useEffect(() => {
    if (tamanho === "md" || tamanho === "sm") {
      miniTrue();
    }
  }, [tamanho]);

  useEffect(() => {
    setSecoes(() => selecionarItem(router.asPath));
  }, [router.asPath]);

  function selecionarItem(url: string) {
    let novasSecoes = secoes.map((secao) => {
      let novosItens = secao.itens.map((item) => {
        return { ...item, selecionado: item.url === url };
      });
      return { ...secao, itens: novosItens };
    });

    return novasSecoes;
  }

  function alternarSecao(secaoSelecionada: MenuSecao) {
    let novasSecoes = secoes.map((secao) => {
      if (secao.titulo === secaoSelecionada.titulo) {
        return { ...secao, aberta: !secao.aberta };
      } else {
        return secao;
      }
    });

    setSecoes(() => novasSecoes);
  }

  const ctx = { secoes, mini, toggleMini, miniTrue, alternarSecao };
  return (
    <ContextoMenu.Provider value={ctx}>{props.children}</ContextoMenu.Provider>
  );
}

export default ContextoMenu;
