import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <Home />
    </div>
  );
}

export default App;
