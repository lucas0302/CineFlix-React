import MenuItem from "./MenuItem";
export default function Menu() {
    return (
        <ul class="menu">
            <MenuItem texto="Home" link="./home.html" imagem="https://cdn-icons-png.flaticon.com/512/6583/6583566.png?ga=GA1.1.168694918.1703285209&" />
            <MenuItem texto="Favoritos" link="./favoritos.html" imagem="https://cdn-icons-png.flaticon.com/512/1104/1104276.png?ga=GA1.1.168694918.1703285209&" />
            <MenuItem texto="Contatos" link="./contatos.html" imagem="https://cdn-icons-png.flaticon.com/512/1278/1278638.png?ga=GA1.1.168694918.1703285209&" />
        </ul>
    );
}
