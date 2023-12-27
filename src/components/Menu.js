import MenuItem from "./MenuItem"

export default function Menu() {

    const menu = [
        { texto: "Home", link: "./home.html", imagem: "https://cdn-icons-png.flaticon.com/512/6583/6583566.png?ga=GA1.1.168694918.1703285209&" },
        { texto: "Favoritos", link: "./favoritos.html", imagem: "https://cdn-icons-png.flaticon.com/512/1104/1104276.png?ga=GA1.1.168694918.1703285209&" },
        { texto: "Contatos", link: "./contatos.html", imagem: "https://cdn-icons-png.flaticon.com/512/1278/1278638.png?ga=GA1.1.168694918.1703285209&" }
    ]

    return (
        <ul className="menu">
            {menu.map((m) => <MenuItem key={m.texto} texto={m.texto} link={m.link} imagem={m.imagem} />)}
        </ul>
    )
}