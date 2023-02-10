import ShoppingCartSite from "./components/ShoppingCartSite";

function App() {
  return (
    <div className="App">
      <ShoppingCartSite
        availableItems={
          [
            {
              name: "Hoover",
              initialQuantityChosen: 0
            },
            {
              name: "Duster",
              initialQuantityChosen: 0
            },
            {
              name: "Sponge",
              initialQuantityChosen: 0
            }
          ]
        }
      />
    </div>
  );
}

export default App;
