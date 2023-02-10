import ShoppingCartSite from "./components/ShoppingCartSite";

function App() {
  return (
    <div className="App">
      <ShoppingCartSite
        // availableItemNames={
        //   [
        //     "Hoover",
        //     "Duster",
        //     "Sponge"
        //   ]
        // }
        availableItems={
          [
            {
              name: "Hoover"
            },
            {
              name: "Duster"
            },
            {
              name: "Sponge"
            }
          ]
        }
      />
    </div>
  );
}

export default App;
