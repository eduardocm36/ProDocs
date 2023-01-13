import "./styles/App.css";
import { Header } from "./sections/Header";
import { Presentacion } from "./sections/Presentation";
import { Ofrecer } from "./sections/Ofrecer";
import { Client } from "./sections/clients";
import { Contact } from "./sections/contact";
// import { Fundadores } from "./sections/fundadores";

function App() {
  return (
    <div className="App">
      <div className="headerContent">
        <Header />
      </div>
      <div className="body">
        <Presentacion/>
        <Ofrecer/>
        <Client/>
        <Contact/>
      </div>
    </div>
  );
}
 

export default App;
