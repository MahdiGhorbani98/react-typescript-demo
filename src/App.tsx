import { List } from "./components/generics/List";

function App() {
  return (
    <>
      {/* <List
        items={["Blue", "Red", "Yellow"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <List
        items={[1, 3, 6]}
        onClick={(item) => {
          console.log(item);
        }}
      /> */}
      <List
        items={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </>
  );
}

export default App;
