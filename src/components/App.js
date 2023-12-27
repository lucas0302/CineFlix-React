import Topo from "./Topo"
import Menu from "./Menu"
import Conteudo from "./Conteudo"
export default function App() {
    return (
        <div>

            <Topo />

            <div className="row">
                <Menu />
                <Conteudo />
                {/*Pode ser assim <Conteudo></Conteudo> ou assim <Conteudo/> as tegs */}
            </div>
        </div>

    );
}

