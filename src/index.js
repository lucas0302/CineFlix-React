import ReactDOM from "react-dom"

function Topo() {
    return (
        <div class="topo">
            <h1>CineFlix</h1>
            <div>
                <button>Inserir  nome</button>
                <p>Bem vindo(a), Fulano!</p>
                <img src="https://vmxi.com.br/img/login.png"></img>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Contatos</a></li>
        </ul>
    );
}

function Conteudo() {
    return (
        <ul class="conteudo">
            <li>Senhor do aneís: a sociedade do anel </li>
            <li>Senhor do aneís: as duas torres </li>
            <li>Senhor do aneís: o retorno do rei </li>
        </ul>
    );
}

function App() {
    return (
        <div>

            <Topo />

            <div class="row">
                <Menu />
                <Conteudo />
                {/*Pode ser assim <Conteudo></Conteudo> ou assim <Conteudo/> as tegs */}
            </div>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector(".root"));