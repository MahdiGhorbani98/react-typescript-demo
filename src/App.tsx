import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

function App() {
  return <Private isLoggedin={true} component={Profile} />;
}

export default App;
