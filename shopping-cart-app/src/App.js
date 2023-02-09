import ShoppingCartSite from "./components/ShoppingCartSite";

function App() {
  return (
    <div className="App">
      <ShoppingCartSite
        availableItemNames={
          [
            "Hoover",
            "Duster",
            "Sponge"
          ]
        }
      />
    </div>
  );
}

export default App;
