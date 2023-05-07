import "./App.css";
import NiceCommerceNav from "./components/NiceCommerceNav";

import bg from "./Image/bg.avif";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <img src={bg} alt="" />
      </div>
      <NiceCommerceNav />
    </div>
  );
}

export default App;
