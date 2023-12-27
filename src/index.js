import ReactDOM from "react-dom/client"
import App from "./components/App"

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)


// esse modo era como se fazia ate a versão 17 do react
//import ReactDOM from "react-dom"
//import App from "./components/App"

//ReactDOM.render(<App />, document.querySelector(".root"));