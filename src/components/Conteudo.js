export default function Conteudo() {
  const filmes = [
    { nome: "Senhor dos anéis: a sociedade do anel", imagem: "https://img.elo7.com.br/product/original/269274A/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek.jpg" },
    { nome: "Senhor dos anéis: as duas torres", imagem: "https://img.elo7.com.br/product/zoom/26927DE/poster-o-senhor-dos-aneis-as-duas-torres-lo02-tam-90x60-cm-presente-nerd.jpg" },
    { nome: "Senhor dos anéis: o retorno do rei", imagem: "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/14/33/18366630.jpg" },
    { nome: "John Wick: De Volta ao Jogo", imagem: "https://img.elo7.com.br/product/original/265E425/big-poster-filme-john-wick-lo02-tamanho-90x60-cm-poster-cinema.jpg" },
    { nome: "John Wick 2: Um Novo Dia para Matar", imagem: "https://img.elo7.com.br/product/zoom/265E4B7/big-poster-filme-john-wick-um-novo-dia-para-matar-lo2-90x60-poster.jpg" },
    { nome: "John Wick 3: Parabellum", imagem: "https://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg" },
    { nome: "John Wick 4", imagem: "https://http2.mlstatic.com/D_NQ_NP_930198-MLB45793674856_052021-O.jpg" },
    { nome: "Aves de Rapina", imagem: "https://cdn.awsli.com.br/600x700/1610/1610163/produto/68791538/poster-arlequina-em-aves-de-rapina-a-910e4295.jpg" },
    { nome: "A Origem", imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg" },
    { nome: "Garota Exemplar", imagem: "https://i.pinimg.com/474x/12/3c/f8/123cf832b2ac27a396f1a6edb2a351bb.jpg" },
    { nome: "Homem de Ferro ", imagem: "https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg" },
    { nome: "Vingadores: Guerra Infinita", imagem: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg" },
    { nome: "Pantera Negra: Wakanda para Sempre", imagem: "https://s2-glamour.glbimg.com/CV473j0T17G1kNT369lbJ_jJKSE=/0x0:743x1100/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2022/A/A/tUlOuNRDGBdBhUaBgGtg/wakanda.png" },
    { nome: "Homem Aranha: Sem volta para Casa", imagem: "https://br.web.img2.acsta.net/pictures/22/08/23/09/37/1541299.jpg" }
  ]

  return (

    <ul class="conteudo">
      {filmes.map((f) =>  <Filme nome={f.nome} imagem={f.imagem}/> )}
    </ul>
  );
}

function Filme(props) {
  return (
    <li class="filme">
      <img src={props.imagem} alt={props.nome} />
      <p>{props.nome}</p>
    </li>
  )
}