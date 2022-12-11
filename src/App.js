import "./styles/App.css";
import { Header } from "./sections/Header";
import { Presentacion } from "./sections/Presentation";
import { Ofrecer } from "./sections/Ofrecer";
import { Founders } from "./sections/Founders";

function App() {
  return (
    <div className="App">
      <div className="headerContent">
        <Header />
      </div>
      <div className="body">
        <Presentacion/>
        <Ofrecer/>
      </div>
    </div>
  );
}
 

export default App;
