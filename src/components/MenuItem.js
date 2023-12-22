function MenuItem(props) {
    return (
        <li>
            <img src={props.imagem} />
            <a href={props.link}>{props.texto}</a>
        </li>
    );
}
export default MenuItem
