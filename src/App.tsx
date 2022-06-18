import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Meh",
    last: "Qor",
  };

  const nameList = [
    { first: "Amin", last: "Rostami" },
    { first: "Hesam", last: "Moradi" },
    { first: "Miki", last: "Fathi" },
  ];

  return (
    <div className="App">
      <Greet name="Ali" />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status="error" />
      <Heading>Children as a prop</Heading>
      <Oscar>
        <Heading> React.ReactNode </Heading>
      </Oscar>
    </div>
  );
}

export default App;
