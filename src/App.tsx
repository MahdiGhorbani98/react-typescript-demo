import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";

function App() {
  // return <DomRef />;
  return <MutableRef />;
}

export default App;
