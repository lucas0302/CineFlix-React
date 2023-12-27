import { useState } from "react"
function Topo() {
    //variavel de estado 
    const [nomeDoUsuario, setNomeDoUsuario] = useState("");
    const [foto, setfoto] = useState("https://vmxi.com.br/img/login.png");
    const [cor, setCor] = useState("verde");

    let frase
    //if(!nomeDoUsuario){ pode se usar assim para fazer a ferificação(nao é um boa pratica)
    if (nomeDoUsuario === "" || nomeDoUsuario === undefined || nomeDoUsuario === null) {
        frase = "Olá, Não sabemos o seu nome!";
    } else {
        frase = `seja bem vindo(a), ${nomeDoUsuario}!`;
    }
    //Tmb pode se usar Ternario: (condicão) ? (se for true) : (se for false); serve para fazer modificações simples ou verificações true ou false "somente"

    function apertabotao() {
        const novoNome = prompt("Qual é seu nome?");
        setNomeDoUsuario(novoNome)
    }

    function trocaFoto() {
        const novaFoto = prompt("Coloque o Link Da Sua Foto de perfil:");
        setfoto(novaFoto);
    }

    function trocaCor(){
        if (cor === "branco"){
            setCor("azul")
        }else{
            setCor("branco")
        }
    }
    //se a função não tiver parâmetros => é só colocar o nome dela 
    //se a função tiver parâmetros => colocar arrow function ante
    //EX: () => somar(6, 7)

    return (

        <div className="topo">
            <h1>CineFlix</h1>
            <div>       
            <button  onClick={trocaCor} className={cor}>Trocar Cor</button>
                <button onClick={apertabotao}>Inserir  nome</button>
                <p>{frase}</p>
                <img onClick={trocaFoto} src={foto} />
            </div>
        </div>
    );
}
export default Topo