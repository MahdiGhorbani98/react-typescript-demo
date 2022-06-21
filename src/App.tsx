import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  );
}

export default App;
