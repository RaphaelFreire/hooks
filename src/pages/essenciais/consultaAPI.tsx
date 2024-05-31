import Pagina from "@/components/template/Pagina";
import { useState, useEffect } from "react";

export default function () {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        console.log("Foto Atualizada"), setUrl(obj.message);
      });
  }, []);

  return (
    <Pagina titulo="Requisição a API" subtitulo="Requerindo dados">
      <img className="max-w-sm" src={url} />
    </Pagina>
  );
}
