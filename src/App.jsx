import "./App.css";
import ItemList from "./components/itemList/ItemList";
import WhoToFollow from "./components/twitterCard/WhoToFollow";

function App() {
  return (
    <main className="main-content">
      <WhoToFollow />
      <ItemList />
    </main>
  );
}

export default App;
