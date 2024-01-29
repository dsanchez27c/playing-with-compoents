import "./App.css";
import ItemList from "./components/itemList/ItemList";
import WhoToFollow from "./components/twitterCard/WhoToFollow";
import { useSEO } from "./hooks/seo/useSEO";

function App() {
  useSEO({
    title: "Programando Componentes",
    description:
      "Este es un pequeño proyecto donde programaré varios componentes de la web.",
  });

  return (
    <main className="main-content">
      <WhoToFollow />
      <ItemList />
    </main>
  );
}

export default App;
