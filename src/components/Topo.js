
function Topo() {
    let nomeDoUsuario = "Lucas";//prompt("Qual é seu nome?");
    let novaFoto = "https://vmxi.com.br/img/login.png";//prompt("Coloque o Link Da Sua Foto de perfil:");
    let fotoInicial = "https://vmxi.com.br/img/login.png"; 
    
    let frase 
    //if(!nomeDoUsuario){ pode se usar assim para fazer a ferificação(nao é um boa pratica)
     if(nomeDoUsuario === "" || nomeDoUsuario === undefined || nomeDoUsuario === null){
      frase = "Olá, Não sabemos o seu nome!";
     }else{
     frase = `seja bem vindo(a), ${nomeDoUsuario}!`;
     }
    //Tmb pode se usar Ternario: (condicão) ? (se for true) : (se for false); serve para fazer modificações simples ou verificações true ou false "somente"

    return (

        <div class="topo">
            <h1>CineFlix</h1>
            <div>
                <button>Inserir  nome</button>
                <p>{frase}</p>
                <img src={novaFoto ? novaFoto : fotoInicial} />
            </div>
        </div>
    );
}
export default Topo